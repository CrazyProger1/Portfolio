from django.db import models

from src.apps.portfolio.models import Message
from src.utils.django.orm.shortcuts import get_all_objects


def get_all_messages() -> models.QuerySet[Message]:
    return get_all_objects(source=Message)
