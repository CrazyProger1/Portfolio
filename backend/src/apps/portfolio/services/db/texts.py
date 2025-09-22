from django.db import models

from src.apps.portfolio.models import TextBlock


def get_user_text_blocks(user) -> models.QuerySet[TextBlock]:
    return user.texts.all().order_by("priority")
