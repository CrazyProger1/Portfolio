from django.contrib import admin
from modeltranslation.admin import TabbedTranslationAdmin
from unfold.admin import ModelAdmin

from src.apps.accounts.sites import site
from src.apps.portfolio.models import Hobby, HobbyTag
from src.utils.django.admin import OwnerAdminMixin, ImageTagAdminMixin


@admin.register(HobbyTag, site=site)
class HobbyTagAdmin(ModelAdmin, TabbedTranslationAdmin):
    list_display = (
        "name",
        "slug",
    )
    list_display_links = (
        "name",
        "slug",
    )
    search_fields = ("name",)


@admin.register(Hobby, site=site)
class HobbyAdmin(
    ModelAdmin, TabbedTranslationAdmin, OwnerAdminMixin, ImageTagAdminMixin
):
    list_display = (
        "image_tag",
        "name",
        "priority",
        "started_at",
        "ended_at",
    )
    list_display_links = (
        "image_tag",
        "name",
    )
    search_fields = ("name", "user__username")
    list_filter = ("user",)
    autocomplete_fields = ("tags",)
    ordering = ("priority",)
    fieldsets = (
        ("General Info", {"fields": ("user", "name", "description", "image")}),
        ("Details", {"fields": ("tags", "priority")}),
        ("Timeline", {"fields": ("started_at", "ended_at")}),
        (
            "Metadata",
            {"fields": ("created_at", "updated_at"), "classes": ("collapse",)},
        ),
    )
    readonly_fields = ("created_at", "updated_at")
