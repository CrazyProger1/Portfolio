from modeltranslation.translator import TranslationOptions, translator

from src.apps.metrics.models import MetricGoal


class MetricGoalTranslationOptions(TranslationOptions):
    fields = ("name", "description")


translator.register(MetricGoal, MetricGoalTranslationOptions)
