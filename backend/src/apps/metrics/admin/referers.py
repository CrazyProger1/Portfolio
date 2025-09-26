from django.contrib import admin

from unfold.admin import ModelAdmin

from src.apps.accounts.sites import site
from src.apps.metrics.models import Referer


@admin.register(Referer, site=site)
class RefererAdmin(ModelAdmin):
    list_display = (
        "referer",
    )
    list_display_links = (
        "referer",
    )
    search_fields = (
        "referer",
    )
