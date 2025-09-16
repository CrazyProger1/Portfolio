from django.conf import settings
from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _

from src.utils.django.orm import UpdatedAtMixin, CreatedAtMixin


class Job(CreatedAtMixin, UpdatedAtMixin, models.Model):
    skills = models.ManyToManyField(
        to="Skill",
        related_name="jobs",
        verbose_name=_("skills"),
        help_text=_("Skills used during this job."),
    )
    user = models.ForeignKey(
        to=settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="jobs",
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
    areas = models.ManyToManyField(
        to="WorkArea",
        related_name="jobs",
        blank=False,
    )
    image = models.ImageField(
        verbose_name=_("image"),
        upload_to="jobs/",
        null=True,
        blank=True,
    )

    class Meta:
        verbose_name = _("Job")
        verbose_name_plural = _("Jobs")

    def __str__(self):
        return self.name
