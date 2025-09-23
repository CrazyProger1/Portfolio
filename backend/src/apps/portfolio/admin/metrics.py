from django.conf import settings
from django.contrib import admin
from django.utils.safestring import mark_safe
from django.utils.translation import gettext_lazy as _
from modeltranslation.admin import TabbedTranslationAdmin
from unfold.admin import ModelAdmin

from src.apps.accounts.sites import site
from src.apps.portfolio.models import Metric


@admin.register(Metric, site=site)
class MetricAdmin(ModelAdmin, TabbedTranslationAdmin):
    list_display = (
        "image_tag",
        "name",
        "slug",
        "platform",
    )
    list_display_links = (
        "image_tag",
        "name",
    )
    search_fields = (
        "name",
        "slug",
    )
    image_field = "image"

    def image_tag(self, obj: Metric):
        platform_image = getattr(getattr(obj, "platform", None), "image", None)
        image = getattr(obj, self.image_field, platform_image) or platform_image

        if image:
            return mark_safe(
                f'<img src="{settings.MEDIA_URL}{image}" width="150" height="150" style="border-radius:10%; object-fit:cover;filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.3));" />'
            )

    image_tag.short_description = _("image")
