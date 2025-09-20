from django.conf import settings
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from django.db import models

from src.apps.portfolio.enums import ProjectState, ProjectType
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
    priority = models.PositiveSmallIntegerField(
        default=0,
        verbose_name=_("priority"),
        help_text=_("The priority of the portfolio shown on the portfolio page."),
        null=False,
        blank=False,
    )

    def __str__(self):
        return self.project.name


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
    description = models.TextField(
        verbose_name=_("description"),
        null=True,
        blank=True,
    )
    image = models.ImageField(
        verbose_name=_("image"),
        upload_to="projects/",
        null=True,
        blank=True,
    )
    started_at = models.DateTimeField(
        verbose_name=_("started at"),
        default=timezone.now,
        null=False,
        blank=False,
    )
    ended_at = models.DateTimeField(
        verbose_name=_("ended at"),
        null=True,
        blank=True,
    )
    skills = models.ManyToManyField(
        to="Skill",
        related_name="projects",
        verbose_name=_("skills"),
        help_text=_("Skills used during this project."),
    )
    links = models.ManyToManyField(
        to="Link",
        related_name="projects",
        verbose_name=_("links"),
        help_text=_("Project links."),
        blank=True,
    )
    areas = models.ManyToManyField(
        to="WorkArea",
        related_name="projects",
        blank=False,
    )
    state = models.CharField(
        max_length=20,
        choices=ProjectState,
        default=ProjectState.DEVELOPMENT,
        null=False,
        blank=False,
    )
    type = models.CharField(
        max_length=20,
        choices=ProjectType,
        default=ProjectType.PET,
        null=False,
        blank=False,
    )
    version = models.CharField(
        max_length=20,
        default="0.0.1",
        null=False,
        blank=False,
    )

    class Meta:
        verbose_name = _("Project")
        verbose_name_plural = _("Projects")

    def __str__(self):
        return self.name
