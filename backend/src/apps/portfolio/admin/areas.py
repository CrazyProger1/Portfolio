from django.contrib import admin
from modeltranslation.admin import TabbedTranslationAdmin
from unfold.admin import ModelAdmin

from src.apps.accounts.sites import site
from src.apps.portfolio.models import WorkArea
from src.utils.django.admin import ImageTagAdminMixin


@admin.register(WorkArea, site=site)
class WorkAreaAdmin(ModelAdmin, TabbedTranslationAdmin, ImageTagAdminMixin):
    list_display = (
        "image_tag",
        "name",
    )
    list_display_links = (
        "image_tag",
        "name",
    )
    search_fields = ("name",)
