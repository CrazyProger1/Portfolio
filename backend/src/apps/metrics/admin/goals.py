from django.contrib import admin
from modeltranslation.admin import TabbedTranslationAdmin
from simple_history.admin import SimpleHistoryAdmin
from unfold.admin import ModelAdmin

from src.apps.accounts.sites import site
from src.apps.metrics.models import MetricGoal


@admin.register(MetricGoal, site=site)
class MetricGoalAdmin(SimpleHistoryAdmin, ModelAdmin, TabbedTranslationAdmin):
    list_display = (
        "id",
        "name",
        "description",
        "value",
    )
    list_display_links = (
        "name",
    )
    search_fields = (
        "name",
    )
