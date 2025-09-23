from enum import StrEnum

from django.db import models
from django.utils.translation import gettext_lazy as _


class GoalPeriod(models.TextChoices):
    YEAR = "YEAR", _("Year")
    MONTH = "MONTH", _("Month")
    WEEK = "WEEK", _("Week")


class DefaultMetric(StrEnum):
    VISIT = "visit"
    MESSAGE = "message"
