from django.contrib import admin
from modeltranslation.admin import TabbedTranslationAdmin
from simple_history.admin import SimpleHistoryAdmin
from unfold.admin import ModelAdmin

from src.apps.accounts.sites import site
from src.apps.metrics.models import Metric


@admin.register(Metric, site=site)
class MetricAdmin(SimpleHistoryAdmin, TabbedTranslationAdmin, ModelAdmin):
    list_display = (
        "id",
        "slug",
        "name",
        "value",
    )
    list_display_links = (
        "slug",
    )
    search_fields = (
        "slug",
        "name",
        "value",
        "id",
        "records__id"
    )
