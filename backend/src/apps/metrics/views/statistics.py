import pycountry
from django.db.models import Count
from django.views.generic import TemplateView
from unfold.views import UnfoldModelAdminViewMixin

from src.apps.metrics.enums import GoalPeriod
from src.apps.metrics.models import Client
from src.apps.metrics.services.statistics import (
    get_last_month_statistics,
    get_last_year_statistics,
    get_last_week_statistics,
)


class StatisticsAdminView(UnfoldModelAdminViewMixin, TemplateView):
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

        context["statistics"] = resolver(user=self.request.user)

        periods = []
        for period in GoalPeriod:
            period: GoalPeriod

            periods.append(
                {
                    "title": period.label,
                    "link": f"?period={period.lower()}",
                    "active": period == current_period,
                }
            )

        context["periods"] = periods
        context["current_period"] = current_period.lower()

        clients_by_country = (
            Client.objects.filter(country__isnull=False).values("country")
            .annotate(count=Count("id"))
            .order_by("-count")
        )
        map_data_countries = []
        map_data_clients = []
        for country in clients_by_country:
            country_alpha3 = pycountry.countries.get(alpha_2=country["country"])
            map_data_countries.append(country_alpha3.alpha_3)
            map_data_clients.append(country["count"])

        context["map_countries"] = map_data_countries
        context["map_clients"] = map_data_clients
        return context
