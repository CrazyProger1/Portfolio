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

    def url(self, obj: CV):
        return str(f"{settings.MEDIA_URL}{obj.file}")
