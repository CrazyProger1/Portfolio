from django.db import models
from django.db.models import OuterRef, Subquery

from src.apps.portfolio.models import Project, UserProject
from src.utils.django.orm.shortcuts import get_all_objects


def get_all_projects() -> models.QuerySet[Project]:
    return get_all_objects(source=Project)


def get_user_projects(user) -> models.QuerySet[Project]:
    priority_subquery = UserProject.objects.filter(
        user=user, project=OuterRef("pk")
    ).values("priority")[:1]

    return (
        Project.objects.filter(users=user)
        .annotate(priority=Subquery(priority_subquery))
        .order_by("priority")
    )
