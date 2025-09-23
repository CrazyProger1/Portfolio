from urllib.parse import urljoin

from django.conf import settings
from django.contrib import admin
from django.utils.html import format_html
from django.utils.safestring import mark_safe

from unfold.admin import ModelAdmin

from src.apps.accounts.sites import site
from src.apps.portfolio.models import CV
from src.utils.django.admin import OwnerAdminMixin


@admin.register(CV, site=site)
class CVAdmin(ModelAdmin, OwnerAdminMixin):
    list_display = (
        "version",
        "link",
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
