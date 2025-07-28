from modeltranslation.translator import TranslationOptions, translator
from simple_history import register

from src.apps.metrics.models import MetricGoal


class MetricGoalTranslationOptions(TranslationOptions):
    fields = ("name", "description")


translator.register(MetricGoal, MetricGoalTranslationOptions)
register(MetricGoal, inherit=True)
