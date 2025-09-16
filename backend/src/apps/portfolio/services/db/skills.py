from django.db import models

from src.apps.portfolio.models import Skill
from src.utils.django.orm.shortcuts import get_all_objects


def get_all_skills() -> models.QuerySet[Skill]:
    return get_all_objects(source=Skill)


def get_user_skills(user) -> models.QuerySet[Skill]:
    return Skill.objects.filter(users=user)
