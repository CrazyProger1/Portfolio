from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.admin import GroupAdmin as BaseGroupAdmin
from django.contrib.auth.models import Group

from unfold.forms import AdminPasswordChangeForm, UserChangeForm, UserCreationForm
from unfold.admin import ModelAdmin

from src.apps.accounts.models import User
from src.apps.accounts.sites import site
from src.apps.portfolio.admin import UserSkillInline, UserProjectInline, UserJobInline

admin.site.unregister(Group)


@admin.register(User, site=site)
class UserAdmin(BaseUserAdmin, ModelAdmin):
    form = UserChangeForm
    add_form = UserCreationForm
    change_password_form = AdminPasswordChangeForm
    inlines = (UserSkillInline, UserProjectInline, UserJobInline)


@admin.register(Group, site=site)
class GroupAdmin(BaseGroupAdmin, ModelAdmin):
    pass
