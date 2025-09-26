from typing import Any

from django.contrib import admin
from django.db.models import Model
from django.forms import Form
from django.http import HttpRequest
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
        "client",
    )
    readonly_fields = (
        "id",
        "created_at",
        "user",
        "client",
    )
    search_fields = ("id",)
    list_filter = (
        "metric",
        "user",
        "referer",
    )
    autocomplete_fields = ("metric",)
    fieldsets = (
        (
            None,
            {
                "fields": (
                    "id",
                    "metric",
                    "user",
                    "client",
                ),
            },
        ),
        (
            _("Metadata"),
            {
                "fields": ("created_at",),
                "classes": ("collapse",),
            },
        ),
    )

    def save_model(
            self,
            request: HttpRequest,
            obj: Model,
            form: Form,
            change: Any,
    ) -> None:
        if not hasattr(obj, "user"):
            obj.user = request.user

        super().save_model(
            request,
            obj,
            form,
            change,
        )
