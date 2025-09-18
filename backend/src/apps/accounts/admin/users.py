from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

from unfold.forms import AdminPasswordChangeForm, UserChangeForm, UserCreationForm
from unfold.admin import ModelAdmin

from src.apps.accounts.admin.keys import APIKeyInline
from src.apps.accounts.models import User
from src.apps.accounts.sites import site
from src.apps.portfolio.admin import UserSkillInline, UserProjectInline, UserJobInline, UserLinkInline


@admin.register(User, site=site)
class UserAdmin(BaseUserAdmin, ModelAdmin):
    form = UserChangeForm
    add_form = UserCreationForm
    change_password_form = AdminPasswordChangeForm
    inlines = (UserSkillInline, UserProjectInline, UserJobInline, APIKeyInline, UserLinkInline)
