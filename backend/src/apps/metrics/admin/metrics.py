from typing import Any

from django.contrib import admin
from django.db.models import Model
from django.forms import Form
from django.http import HttpRequest
from django.urls import URLPattern, path
from modeltranslation.admin import TabbedTranslationAdmin
from unfold.admin import ModelAdmin

from src.apps.accounts.sites import site
from src.apps.metrics.models import Metric
from src.apps.metrics.views import StatisticsAdminView


@admin.register(Metric, site=site)
class MetricAdmin(TabbedTranslationAdmin, ModelAdmin):
    list_display = (
        "id",
        "slug",
        "name",
        "user",
    )
    list_display_links = ("slug",)
    search_fields = ("slug", "name", "id", "records__id")
    list_filter = ("user",)
    readonly_fields = ("user",)

    def get_urls(self) -> list[URLPattern]:
        urls = super().get_urls()
        stats_view = self.admin_site.admin_view(
            StatisticsAdminView.as_view(model_admin=self)
        )

        return [
            path("statistics/", stats_view, name="metrics_statistics"),
        ] + urls

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
