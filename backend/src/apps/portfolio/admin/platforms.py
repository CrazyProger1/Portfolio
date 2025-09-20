from django.contrib import admin
from modeltranslation.admin import TabbedTranslationAdmin
from unfold.admin import ModelAdmin

from src.apps.accounts.sites import site
from src.apps.portfolio.models import Platform
from src.utils.django.admin import ImageTagMixin


@admin.register(Platform, site=site)
class PlatformAdmin(ModelAdmin, ImageTagMixin, TabbedTranslationAdmin):
    list_display = (
        "image_tag",
        "name",
        "slug",
    )
    list_display_links = (
        "image_tag",
        "name",
    )
    search_fields = (
        "name",
        "slug",
    )
