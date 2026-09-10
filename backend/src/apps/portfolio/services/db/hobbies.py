from django.db import models

from src.apps.accounts.models import User
from src.apps.portfolio.models import Hobby
from src.utils.django.orm.shortcuts import get_all_objects


def get_all_hobbies() -> models.QuerySet[Hobby]:
    return get_all_objects(source=Hobby)


def get_user_hobbies(user: User) -> models.QuerySet[Hobby]:
    return user.hobbies.all().order_by("priority")
