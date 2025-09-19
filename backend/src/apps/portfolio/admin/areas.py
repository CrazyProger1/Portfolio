from django.contrib import admin
from modeltranslation.admin import TabbedTranslationAdmin
from unfold.admin import ModelAdmin

from src.apps.accounts.sites import site
from src.apps.portfolio.models import WorkArea
from src.utils.django.admin import ImageTagMixin


@admin.register(WorkArea, site=site)
class WorkAreaAdmin(ModelAdmin, TabbedTranslationAdmin, ImageTagMixin):
    list_display = ("name",)
    list_display_links = ("name",)
    search_fields = ("name",)
