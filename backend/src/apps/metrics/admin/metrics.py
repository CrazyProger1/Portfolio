import random

from django.contrib import admin
from django.urls import URLPattern, path
from django.views.generic import TemplateView
from modeltranslation.admin import TabbedTranslationAdmin
from unfold.admin import ModelAdmin
from unfold.views import UnfoldModelAdminViewMixin

from src.apps.accounts.sites import site
from src.apps.metrics.admin.goals import MetricGoalInline
from src.apps.metrics.enums import GoalPeriod
from src.apps.metrics.models import Metric
from src.apps.metrics.services.statistics import get_last_month_statistics, get_last_year_statistics, \
    get_last_week_statistics


def random_color():
    return "#{:06x}".format(random.randint(0, 0xFFFFFF))


class StatisticsView(UnfoldModelAdminViewMixin, TemplateView):
    title = "Statistics"
    permission_required = ()
    template_name = "metrics/statistics.html"

    def get_context_data(self, **kwargs):
        period_resolvers = {
            GoalPeriod.YEAR: get_last_year_statistics,
            GoalPeriod.MONTH: get_last_month_statistics,
            GoalPeriod.WEEK: get_last_week_statistics,
        }
        current_period = self.request.GET.get("period", "month").upper()

        context = super().get_context_data(**kwargs)

        resolver = period_resolvers.get(current_period)

        context["statistics"] = resolver()

        periods = []
        for period in GoalPeriod:
            period: GoalPeriod

            periods.append(
                {
                    "title": period.label,
                    "link": f"?period={period.lower()}",
                    "active": period == current_period
                }
            )

        context["periods"] = periods
        context["current_period"] = current_period.lower()

        return context


@admin.register(Metric, site=site)
class MetricAdmin(TabbedTranslationAdmin, ModelAdmin):
    inlines = (MetricGoalInline,)
    list_display = (
        "id",
        "slug",
        "name",
        "value",
    )
    list_display_links = ("slug",)
    search_fields = ("slug", "name", "value", "id", "records__id")

    def get_urls(self) -> list[URLPattern]:
        urls = super().get_urls()
        stats_view = self.admin_site.admin_view(StatisticsView.as_view(model_admin=self))

        return [
            path("statistics/", stats_view, name="metrics_statistics"),
        ] + urls
