from typing import Any

from django.contrib import admin
from django.forms import Form
from django.http import HttpRequest
from django.utils.safestring import mark_safe
from django.utils.translation import gettext_lazy as _
from modeltranslation.admin import TabbedTranslationAdmin
from unfold.admin import ModelAdmin, TabularInline

from src.apps.accounts.sites import site
from src.apps.portfolio.models import Project, UserProject
from src.config import settings
from src.utils.django.admin import ImageTagMixin


@admin.register(Project, site=site)
class ProjectAdmin(ModelAdmin, TabbedTranslationAdmin, ImageTagMixin):
    list_display = (
        "image_tag",
        "name",
        "started_at",
        "ended_at",
    )
    list_display_links = (
        "image_tag",
        "name",
    )

    list_filter = ("users",)

    autocomplete_fields = (
        "skills",
        "areas",
        "links",
    )
    fieldsets = (
        ("General Info", {"fields": ("name", "description", "image")}),
        ("Details", {"fields": ("skills", "areas", "links")}),
        ("Timeline", {"fields": ("started_at", "ended_at")}),
        ("Classification", {"fields": ("state", "type", "version")}),
        (
            "Metadata",
            {"fields": ("created_at", "updated_at"), "classes": ("collapse",)},
        ),
    )
    readonly_fields = ("created_at", "updated_at")

    def get_queryset(self, request):
        queryset = super().get_queryset(request)
        if request.user.is_superuser:
            return queryset

        return queryset.filter(users=request.user)

    def save_model(
            self,
            request: HttpRequest,
            obj: Project,
            form: Form,
            change: Any,
    ) -> None:
        super().save_model(
            request,
            obj,
            form,
            change,
        )

        if not hasattr(obj, "user"):
            obj.users.add(request.user)


class UserProjectInline(TabularInline):
    model = UserProject
    extra = 1
    tab = True
    fields = ("project", "priority",)
    show_change_link = True
    verbose_name = _("Project")
    verbose_name_plural = _("Projects")
    ordering = ("priority",)
