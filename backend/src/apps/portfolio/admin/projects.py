from django.contrib import admin
from django.utils.safestring import mark_safe
from django.utils.translation import gettext_lazy as _
from modeltranslation.admin import TabbedTranslationAdmin
from unfold.admin import ModelAdmin, TabularInline

from src.apps.accounts.sites import site
from src.apps.portfolio.models import Project, UserProject
from src.config import settings


@admin.register(Project, site=site)
class ProjectAdmin(ModelAdmin, TabbedTranslationAdmin):
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
    )
    fieldsets = (
        ("General Info", {"fields": ("name", "description", "image")}),
        ("Details", {"fields": ("skills", "areas")}),
        ("Timeline", {"fields": ("started_at", "ended_at")}),
        ("Classification", {"fields": ("state", "type", "version")}),
        ("Metadata", {"fields": ("created_at", "updated_at"), "classes": ("collapse",)}),
    )
    readonly_fields = ("created_at", "updated_at")

    def image_tag(self, obj: Project):
        return mark_safe(
            f'<img src="/{settings.MEDIA_URL}{obj.image}" width="150" height="150" style="border-radius:10%; object-fit:cover;" />'
        )

    image_tag.short_description = _("image")


class UserProjectInline(TabularInline):
    model = UserProject
    extra = 1
    tab = True
    fields = ("project",)
    show_change_link = True
    verbose_name = _("Project")
    verbose_name_plural = _("Projects")
