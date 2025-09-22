from enum import StrEnum

from django.db import models
from django.utils.translation import gettext_lazy as _


class SkillLevel(models.TextChoices):
    BEGINNER = "BEGINNER", _("Beginner")
    INTERMEDIATE = "INTERMEDIATE", _("Intermediate")
    EXPERT = "EXPERT", _("Expert")


class ProjectType(models.TextChoices):
    OPENSOURCE = "OPENSOURCE", _("Open-source")
    COMMERCIAL = "COMMERCIAL", _("Commercial")
    PET = "PET", _("Pet")


class ProjectState(models.TextChoices):
    FROZEN = "FROZEN", _("Frozen")
    DEVELOPMENT = "DEVELOPMENT", _("Development")
    PRODUCTION = "PRODUCTION", _("Production")


class JobSchedule(models.TextChoices):
    FULLTIME = "FULLTIME", _("Full-time")
    PARTTIME = "PARTTIME", _("Part-time")


class Metric(StrEnum):
    VISIT = "visit"
    MESSAGE = "message"
