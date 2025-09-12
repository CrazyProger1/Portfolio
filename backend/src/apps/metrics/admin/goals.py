from typing import Any

from django.contrib import admin
from django.db.models import Model
from django.forms import Form
from django.http import HttpRequest
from django.utils.safestring import mark_safe
from django.utils.translation import gettext_lazy as _
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
        "user",
        "period",
        "value",
        "color_tag",
    )
    list_display_links = ("name",)
    search_fields = ("name",)
    form = MetricGoalForm
    list_filter = (
        "metric",
        "user",
    )
    readonly_fields = ("user",)

    def color_tag(self, obj: MetricGoal):
        return mark_safe(
            f'<div style="background-color:{obj.color};width:40px;height:2px"></div>'
        )

    color_tag.short_description = _("color")

    def save_model(
        self,
        request: HttpRequest,
        obj: Model,
        form: Form,
        change: Any,
    ) -> None:
        if not obj.user:
            obj.user = request.user

        super().save_model(
            request,
            obj,
            form,
            change,
        )


class MetricGoalInline(TabularInline):
    model = MetricGoal
    extra = 0
    tab = True
    fields = (
        "name",
        "value",
    )
    show_change_link = True
