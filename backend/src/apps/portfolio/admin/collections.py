from django.contrib import admin

from modeltranslation.admin import TabbedTranslationAdmin
from unfold.admin import ModelAdmin

from src.apps.accounts.sites import site
from src.apps.portfolio.models import Collection
from src.utils.django.admin import ImageTagMixin


@admin.register(Collection, site=site)
class CollectionAdmin(ModelAdmin, ImageTagMixin, TabbedTranslationAdmin):
    list_display = (
        "image_tag",
        "name",
        "slug",
    )
    search_fields = (
        "name",
        "slug",
    )
