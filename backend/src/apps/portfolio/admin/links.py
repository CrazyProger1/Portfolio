from django.conf import settings
from django.contrib import admin
from django.utils.safestring import mark_safe
from modeltranslation.admin import TabbedTranslationAdmin
from unfold.admin import TabularInline, ModelAdmin

from django.utils.translation import gettext_lazy as _

from src.apps.accounts.sites import site
from src.apps.portfolio.models import Link
from src.utils.django.admin import ImageTagMixin, OwnerMixin


class UserLinkInline(TabularInline):
    model = Link
    tab = True
    fields = (
        "name",
        "link",
    )
    extra = 0
    show_change_link = True
    verbose_name = _("Link")
    verbose_name_plural = _("Links")


@admin.register(Link, site=site)
class LinkAdmin(ModelAdmin, ImageTagMixin, OwnerMixin, TabbedTranslationAdmin):
    list_display = (
        "image_tag",
        "name",
        "link",
        "platform",
        "priority",
    )
    list_display_links = (
        "image_tag",
        "name",
    )
    owner_field = "user"
    readonly_fields = ("user",)
    list_filter = ("user",)
    autocomplete_fields = (
        "platform",
        "collections",
    )
    search_fields = ("name",)
    ordering = ("priority",)

    def image_tag(self, obj: Link):
        platform_image = getattr(getattr(obj, "platform", None), "image", None)
        image = getattr(obj, self.image_field, platform_image) or platform_image

        if image:
            return mark_safe(
                f'<img src="{settings.MEDIA_URL}{image}" width="150" height="150" style="border-radius:10%; object-fit:cover;filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.3));" />'
            )

    image_tag.short_description = _("image")
