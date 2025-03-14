from django.conf import settings
from django.contrib import admin
from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _


class CreatedAtMixin(models.Model):
    created_at = models.DateTimeField(
        null=False,
        blank=False,
        default=timezone.now,
        verbose_name=_("created at"),
        help_text=_("The date and time this object was created."),
    )

    class Meta:
        abstract = True


class UpdatedAtMixin(models.Model):
    updated_at = models.DateTimeField(
        auto_now=True,
        verbose_name=_("updated at"),
        help_text=_("The date and time this object was updated."),
    )

    class Meta:
        abstract = True


class TimestampMixin(CreatedAtMixin, UpdatedAtMixin):
    class Meta:
        abstract = True


class CreatedByMixin(models.Model):
    created_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="%(class)s_created_by",
        verbose_name=_("created by"),
        help_text=_("The user who created this object."),
    )

    class Meta:
        abstract = True


class UpdatedByMixin(models.Model):
    updated_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="%(class)s_updated_by",
        verbose_name=_("updated by"),
        help_text=_("The user who updated this object."),
    )

    class Meta:
        abstract = True


class AuthorshipMixin(CreatedByMixin, UpdatedByMixin):
    class Meta:
        abstract = True


class MetadataMixin(TimestampMixin, AuthorshipMixin):
    class Meta:
        abstract = True


class MetadataAdminMixin(admin.ModelAdmin):

    def get_fieldsets(self, request, obj=None):
        if self.fieldsets:
            return self.fieldsets

        fieldsets = list(super().get_fieldsets(request=request, obj=obj))

        for name, fieldset in fieldsets:
            fields = fieldset.get("fields", ())
            if {"created_at", "updated_at", "created_by", "updated_by"} & set(fields):
                return fieldsets

        fieldsets.append(
            (
                _("Metadata"),
                {
                    "fields": (
                        "created_at",
                        "updated_at",
                        "created_by",
                        "updated_by",
                    ),
                    "classes": ("collapse",),
                },
            )
        )
        return fieldsets

    def get_list_filter(self, request):
        if self.list_filter:
            return self.list_filter

        list_filter = list(super().get_list_filter(request=request))
        list_filter += [
            "created_at",
            "updated_at",
            "created_by",
            "updated_by",
        ]
        return list_filter

    def get_readonly_fields(self, request, obj=None):
        if self.readonly_fields:
            return self.readonly_fields

        readonly_fields = list(super().get_readonly_fields(request=request, obj=obj))
        readonly_fields += [
            "created_at",
            "updated_at",
            "created_by",
            "updated_by",
        ]
        return readonly_fields
