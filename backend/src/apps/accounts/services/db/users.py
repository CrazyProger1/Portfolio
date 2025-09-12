from django.db import models

from src.apps.accounts.models import User
from src.utils.django.orm.shortcuts import get_all_objects


def get_all_users() -> models.QuerySet[User]:
    return get_all_objects(source=User)
