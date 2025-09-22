from django.contrib import admin
from modeltranslation.admin import TabbedTranslationAdmin
from unfold.admin import ModelAdmin

from src.apps.accounts.sites import site
from src.apps.metrics.models import Client


@admin.register(Client, site=site)
class ClientAdmin(ModelAdmin):
    list_display = (
        "id",
        "ip",
    )
    list_display_links = ("ip",)
    search_fields = ("ip",)
