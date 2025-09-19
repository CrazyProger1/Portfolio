from django.db import models

from src.apps.portfolio.models import Skill, UserSkill
from src.utils.django.orm.shortcuts import get_all_objects


def get_all_user_skills() -> models.QuerySet[UserSkill]:
    return get_all_objects(source=UserSkill)


def get_user_skills(user) -> models.QuerySet[UserSkill]:
    return UserSkill.objects.filter(user=user).select_related("skill")


def get_user_skills_from_skills(user, skills: models.QuerySet[Skill]) -> models.QuerySet[UserSkill]:
    skills = skills.values_list("id", flat=True)

    return UserSkill.objects.filter(
        user=user,
        skill_id__in=skills
    ).select_related("skill", )
