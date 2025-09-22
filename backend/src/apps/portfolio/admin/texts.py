from django.conf import settings
from django.contrib import admin
from django.utils.safestring import mark_safe
from modeltranslation.admin import TabbedTranslationAdmin
from unfold.admin import ModelAdmin
from django.utils.translation import gettext_lazy as _

from src.apps.accounts.sites import site
from src.apps.portfolio.models import TextBlock
from src.utils.django.admin import OwnerAdminMixin


@admin.register(TextBlock, site=site)
class TextBlockAdmin(ModelAdmin, OwnerAdminMixin, TabbedTranslationAdmin):
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
    list_filter = ("collections",)
    readonly_fields = ("user",)
    autocomplete_fields = ("collections",)
    image_field = "image"

    def image_tag(self, obj: TextBlock):
        collection = obj.collections.first()

        collection_image = None
        if collection:
            collection_image = collection.image

        image = getattr(obj, self.image_field, collection_image) or collection_image

        if image:
            return mark_safe(
                f'<img src="{settings.MEDIA_URL}{image}" width="150" height="150" style="border-radius:10%; object-fit:cover;filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.3));" />'
            )

    image_tag.short_description = _("image")
