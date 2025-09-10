from django.contrib import admin
from modeltranslation.admin import TabbedTranslationAdmin
from unfold.admin import ModelAdmin

from src.apps.accounts.sites import site
from src.apps.portfolio.models import WorkArea


@admin.register(WorkArea, site=site)
class WorkAreaAdmin(ModelAdmin, TabbedTranslationAdmin):
    list_display = ("name",)
    list_display_links = ("name",)
    search_fields = ("name",)
