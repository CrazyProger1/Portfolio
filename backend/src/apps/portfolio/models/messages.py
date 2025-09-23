from django.conf import settings
from django.db import models
from django.utils.translation import gettext_lazy as _

from src.utils.django.orm import CreatedAtMixin


class Message(CreatedAtMixin, models.Model):
    user = models.ForeignKey(
        to=settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        null=False,
        blank=False,
        related_name="messages",
    )
    subject = models.CharField(
        verbose_name=_("subject"),
        max_length=250,
        null=False,
        blank=False,
    )
    email = models.EmailField(
        verbose_name=_("email"),
        null=False,
        blank=False,
    )
    message = models.TextField(
        verbose_name=_("message"),
        null=False,
        blank=False,
    )
    is_read = models.BooleanField(
        default=False,
        verbose_name=_("is read"),
        null=False,
        blank=False,
    )

    class Meta:
        verbose_name = _("Message")
        verbose_name_plural = _("Messages")

    def __str__(self):
        return self.subject
