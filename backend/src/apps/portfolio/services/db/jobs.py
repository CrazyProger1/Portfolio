from django.db import models

from src.apps.portfolio.models import Job
from src.utils.django.orm.shortcuts import get_all_objects


def get_all_jobs() -> models.QuerySet[Job]:
    return get_all_objects(source=Job)


def get_user_jobs(user) -> models.QuerySet[Job]:
    return user.jobs.all()
