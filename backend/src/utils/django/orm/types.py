from typing import TypeVar

from django.db import models

Model = TypeVar("Model", bound=models.Model)
Source = type[Model] | models.Manager[Model] | models.QuerySet[Model]
