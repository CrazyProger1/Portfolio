from urllib.parse import urljoin

from django.conf import settings
from django.contrib import admin

from unfold.admin import ModelAdmin

from src.apps.accounts.sites import site
from src.apps.portfolio.models import CV
from src.utils.django.admin import OwnerAdminMixin


@admin.register(CV, site=site)
class CVAdmin(ModelAdmin, OwnerAdminMixin):
    list_display = (
        "version",
        "url",
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
        "url",
    )

    def url(self, obj: CV):
        return urljoin(settings.SITE_URL, f"{settings.MEDIA_URL}{obj.file}")
