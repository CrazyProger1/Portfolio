from django.contrib import admin
from django.utils.translation import gettext_lazy as _
from unfold.admin import ModelAdmin, TabularInline

from src.apps.accounts.sites import site
from src.apps.portfolio.models import Project, UserProject


@admin.register(Project, site=site)
class ProjectAdmin(ModelAdmin):
    list_display = ("name",)
    list_display_links = ("name",)


class UserProjectInline(TabularInline):
    model = UserProject
    extra = 1
    tab = True
    fields = (
        "project",
    )
    show_change_link = True
    verbose_name = _("Project")
    verbose_name_plural = _("Projects")
