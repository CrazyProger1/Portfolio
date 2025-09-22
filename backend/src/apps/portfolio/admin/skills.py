from django.conf import settings
from django.contrib import admin
from django.utils.safestring import mark_safe
from django.utils.translation import gettext_lazy as _
from modeltranslation.admin import TabbedTranslationAdmin
from unfold.admin import ModelAdmin, TabularInline

from src.apps.accounts.sites import site
from src.apps.portfolio.models import Skill, UserSkill
from src.utils.django.admin import ImageTagAdminMixin


@admin.register(Skill, site=site)
class SkillAdmin(ModelAdmin, TabbedTranslationAdmin, ImageTagAdminMixin):
    list_display = (
        "image_tag",
        "name",
    )
    list_display_links = (
        "image_tag",
        "name",
    )

    search_fields = ("name",)


class UserSkillInline(TabularInline):
    model = UserSkill
    extra = 1
    tab = True
    fields = (
        "skill",
        "level",
        "priority",
    )
    show_change_link = True
    verbose_name = _("Skill")
    verbose_name_plural = _("Skills")
    ordering = ("priority",)
    autocomplete_fields = ("skill",)
