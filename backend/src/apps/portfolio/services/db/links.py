from django.db import models

from src.apps.portfolio.models import Job, Link
from src.utils.django.orm.shortcuts import get_all_objects


def get_all_links() -> models.QuerySet[Link]:
    return get_all_objects(source=Link)


def get_user_links(user) -> models.QuerySet[Link]:
    return user.links.all().order_by("priority")
