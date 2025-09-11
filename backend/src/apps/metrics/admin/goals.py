from django.contrib import admin
from modeltranslation.admin import TabbedTranslationAdmin
from unfold.admin import ModelAdmin, TabularInline

from src.apps.accounts.sites import site
from src.apps.metrics.forms import MetricGoalForm
from src.apps.metrics.models import MetricGoal


@admin.register(MetricGoal, site=site)
class MetricGoalAdmin(ModelAdmin, TabbedTranslationAdmin):
    list_display = (
        "id",
        "name",
        "metric",
        "period",
        "value",
    )
    list_display_links = ("name",)
    search_fields = ("name",)
    form = MetricGoalForm
    list_filter = ("metric",)


class MetricGoalInline(TabularInline):
    model = MetricGoal
    extra = 0
    tab = True
    fields = (
        "name",
        "value",
    )
    show_change_link = True
