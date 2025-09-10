from django.db.models import TextChoices
from django.utils.translation import gettext_lazy as _


class SkillLevel(TextChoices):
    BEGINNER = "BEGINNER", _("Beginner")
    INTERMEDIATE = "INTERMEDIATE", _("Intermediate")
    EXPERT = "EXPERT", _("Expert")
