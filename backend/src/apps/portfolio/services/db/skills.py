from django.db import models

from src.apps.portfolio.models import Skill, UserSkill
from src.utils.django.orm.shortcuts import get_all_objects


def get_all_user_skills() -> models.QuerySet[UserSkill]:
    return get_all_objects(source=UserSkill)


def get_user_skills(user) -> models.QuerySet[UserSkill]:
    return UserSkill.objects.filter(user=user).select_related("skill")
