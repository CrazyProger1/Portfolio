from django.conf import settings
from django.db import models
from django.utils.translation import gettext_lazy as _


class CV(models.Model):
    version = models.CharField(
        max_length=250,
        verbose_name=_("version"),
        null=False,
        blank=False,
    )
    file = models.FileField(
        verbose_name=_("cv"),
        upload_to="cvs/",
        null=False,
        blank=False,
    )
    user = models.ForeignKey(
        to=settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="cvs",
        verbose_name=_("user"),
        help_text=_("User associated with this CV."),
    )

    class Meta:
        verbose_name = _("CV")
        verbose_name_plural = _("CVs")

    def __str__(self):
        return self.version
