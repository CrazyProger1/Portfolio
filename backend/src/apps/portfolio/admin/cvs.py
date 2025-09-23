from urllib.parse import urljoin

from django.conf import settings
from django.contrib import admin
from django.utils.html import format_html
from django.utils.safestring import mark_safe
from django.utils.translation import gettext_lazy as _

from unfold.admin import ModelAdmin

from src.apps.accounts.sites import site
from src.apps.portfolio.models import CV
from src.utils.django.admin import OwnerAdminMixin


@admin.register(CV, site=site)
class CVAdmin(ModelAdmin, OwnerAdminMixin):
    list_display = (
        "version",
        "link",
        "created_at",
    )
    list_display_links = (
        "version",
    )
    search_fields = (
        "version",
    )
    owner_field = "user"
    readonly_fields = (
        "user",
        "link",
    )
    list_filter = (
        "created_at",
    )
    fieldsets = (
        ("General Information", {
            "fields": ("version", "user")
        }),
        ("File Preview", {
            "fields": ("link", "frame")
        }),
        (
            _("Metadata"),
            {
                "fields": ("created_at",),
                "classes": ("collapse",),
            },
        ),
    )

    def link(self, obj: CV):
        url = urljoin(settings.SITE_URL, f"{settings.MEDIA_URL}{obj.file}")
        return mark_safe(f'<a href="{url}" target="_blank">{url}</a>')

    link.short_description = "URL"

    def frame(self, obj: CV):
        url = urljoin(settings.SITE_URL, f"{settings.MEDIA_URL}{obj.file}")
        return format_html(
            '<iframe src="{}" width="400" height="200" style="border:none;"></iframe>',
            url
        )
