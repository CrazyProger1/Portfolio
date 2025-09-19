from django.conf import settings
from django.contrib import admin
from django.utils.safestring import mark_safe
from django.utils.translation import gettext_lazy as _
from modeltranslation.admin import TabbedTranslationAdmin
from unfold.admin import ModelAdmin, TabularInline

from src.apps.accounts.sites import site
from src.apps.portfolio.models import Job
from src.utils.django.admin import OwnerMixin


class UserJobInline(TabularInline):
    model = Job
    tab = True
    fields = ("name", "started_at", "ended_at")
    extra = 0
    show_change_link = True
    verbose_name = _("Job")
    verbose_name_plural = _("Jobs")

    def has_change_permission(self, request, obj=None):
        return False

    def has_add_permission(self, request, obj):
        return False


@admin.register(Job, site=site)
class JobAdmin(ModelAdmin, TabbedTranslationAdmin, OwnerMixin):
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
    search_fields = ("name", "user__username")
    list_filter = ("user",)
    autocomplete_fields = ("skills", "areas")
    fieldsets = (
        ("General Info", {"fields": ("user", "name", "description", "image")}),
        ("Details", {"fields": ("skills", "areas")}),
        ("Timeline", {"fields": ("started_at", "ended_at")}),
        (
            "Metadata",
            {"fields": ("created_at", "updated_at"), "classes": ("collapse",)},
        ),
    )
    readonly_fields = ("created_at", "updated_at")

    def image_tag(self, obj: Job):
        return mark_safe(
            f'<img src="{settings.MEDIA_URL}{obj.image}" width="150" height="150" style="border-radius:10%; object-fit:cover;" />'
        )

    image_tag.short_description = _("image")
