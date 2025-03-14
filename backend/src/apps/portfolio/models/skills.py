from django.conf import settings
from django.db import models
from django.utils.translation import gettext_lazy as _


class UserSkill(models.Model):
    user = models.ForeignKey(
        to=settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        null=False,
        blank=False,
    )
    skill = models.ForeignKey(
        to="Skill",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
    )


class Skill(models.Model):
    users = models.ManyToManyField(
        to=settings.AUTH_USER_MODEL,
        through=UserSkill,
        related_name="skills",
        verbose_name=_("users"),
        help_text=_("Users with this skill."),
    )

    class Meta:
        verbose_name = _("Skill")
        verbose_name_plural = _("Skills")
