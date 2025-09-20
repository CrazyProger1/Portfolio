from django.conf import settings
from django.db import models
from django.utils.translation import gettext_lazy as _

from src.apps.portfolio.enums import SkillLevel
from src.utils.django.orm import CreatedAtMixin, UpdatedAtMixin


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
        verbose_name=_("skill"),
        null=False,
        blank=False,
    )
    level = models.CharField(
        choices=SkillLevel,
        default=SkillLevel.BEGINNER,
        verbose_name=_("level"),
        null=False,
        blank=False,
    )
    priority = models.PositiveSmallIntegerField(
        default=0,
        verbose_name=_("priority"),
        help_text=_("The priority of the skill shown on the portfolio page."),
        null=False,
        blank=False,
    )

    class Meta:
        unique_together = ("user", "skill")

    def __str__(self):
        return self.skill.name


class Skill(CreatedAtMixin, UpdatedAtMixin, models.Model):
    users = models.ManyToManyField(
        to=settings.AUTH_USER_MODEL,
        through=UserSkill,
        related_name="skills",
        verbose_name=_("users"),
        help_text=_("Users with this skill."),
    )
    name = models.CharField(
        max_length=250,
        verbose_name=_("name"),
        null=False,
        blank=False,
    )
    image = models.ImageField(
        upload_to="skills/",
        verbose_name=_("image"),
        null=True,
        blank=True,
    )

    class Meta:
        verbose_name = _("Skill")
        verbose_name_plural = _("Skills")

    def __str__(self):
        return self.name
