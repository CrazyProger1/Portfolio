from django.conf import settings
from django.utils.translation import gettext_lazy as _
from django.db import models

from src.utils.django.orm import CreatedAtMixin, UpdatedAtMixin


class UserProject(models.Model):
    user = models.ForeignKey(
        to=settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        null=False,
        blank=False,
    )
    project = models.ForeignKey(
        to="Project",
        on_delete=models.CASCADE,
        verbose_name=_("project"),
        null=False,
        blank=False,
    )


class Project(CreatedAtMixin, UpdatedAtMixin, models.Model):
    users = models.ManyToManyField(
        to=settings.AUTH_USER_MODEL,
        through=UserProject,
        related_name="projects",
        verbose_name=_("users"),
        help_text=_("Users who made this project."),
    )
    name = models.CharField(
        max_length=250,
        verbose_name=_("name"),
        null=False,
        blank=False,
    )

    class Meta:
        verbose_name = _("Project")
        verbose_name_plural = _("Projects")

    def __str__(self):
        return self.name
