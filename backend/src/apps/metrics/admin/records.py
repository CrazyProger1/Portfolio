from django.contrib import admin
from django.utils.translation import gettext_lazy as _
from unfold.admin import ModelAdmin

from src.apps.accounts.sites import site
from src.apps.metrics.models import MetricRecord


@admin.register(MetricRecord, site=site)
class MetricRecordAdmin(ModelAdmin):
    list_display = (
        "id",
        "metric",
        "user",
    )
    readonly_fields = (
        "id",
        "created_at",
    )
    search_fields = (
        "id",
    )
    list_filter = (
        "metric",
    )
    autocomplete_fields = (
        "metric",
    )
    fieldsets = (
        (None, {
            "fields": (
                "id",
                "metric",
                "user",
            ),
        }),
        (_("Metadata"), {
            "fields": (
                "created_at",
            ),
            "classes": ("collapse",),
        }),
    )
