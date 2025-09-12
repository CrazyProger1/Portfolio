from django.conf import settings
from django.contrib import admin
from django.utils.safestring import mark_safe
from django.utils.translation import gettext_lazy as _
from modeltranslation.admin import TabbedTranslationAdmin
from unfold.admin import ModelAdmin, TabularInline

from src.apps.accounts.sites import site
from src.apps.portfolio.models import Skill, UserSkill


@admin.register(Skill, site=site)
class SkillAdmin(ModelAdmin, TabbedTranslationAdmin):
    list_display = (
        "image_tag",
        "name",
    )
    list_display_links = (
        "image_tag",
        "name",
    )

    search_fields = ("name",)

    def image_tag(self, obj: Skill):
        return mark_safe(
            f'<img src="{settings.MEDIA_URL}{obj.image}" width="150" height="150" style="border-radius:10%; object-fit:cover;" />'
        )

    image_tag.short_description = _("image")


class UserSkillInline(TabularInline):
    model = UserSkill
    extra = 1
    tab = True
    fields = (
        "skill",
        "level",
    )
    show_change_link = True
    verbose_name = _("Skill")
    verbose_name_plural = _("Skills")
