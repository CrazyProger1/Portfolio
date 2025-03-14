from modeltranslation.translator import TranslationOptions, translator
from simple_history import register

from src.apps.metrics.models import Metric


class MetricTranslationOptions(TranslationOptions):
    fields = ("name", "description")


translator.register(Metric, MetricTranslationOptions)
register(Metric, inherit=True)
