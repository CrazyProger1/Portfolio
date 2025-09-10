from django.contrib import admin

from unfold.admin import ModelAdmin

from src.apps.accounts.sites import site
from src.apps.portfolio.models import Skill


@admin.register(Skill, site=site)
class SkillAdmin(ModelAdmin):
    list_display = ("name",)
    list_display_links = ("name",)
