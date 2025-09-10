from django.contrib import admin
from django.utils.translation import gettext_lazy as _
from modeltranslation.admin import TabbedTranslationAdmin
from unfold.admin import ModelAdmin, TabularInline

from src.apps.accounts.sites import site
from src.apps.portfolio.models import Skill, UserSkill


@admin.register(Skill, site=site)
class SkillAdmin(ModelAdmin, TabbedTranslationAdmin):
    list_display = ("name",)
    list_display_links = ("name",)

    search_fields = ("name",)


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
