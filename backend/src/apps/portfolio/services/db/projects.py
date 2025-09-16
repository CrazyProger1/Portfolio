from django.db import models

from src.apps.portfolio.models import Project
from src.utils.django.orm.shortcuts import get_all_objects


def get_all_projects() -> models.QuerySet[Project]:
    return get_all_objects(source=Project)


def get_user_projects(user) -> models.QuerySet[Project]:
    return Project.objects.filter(users=user)
