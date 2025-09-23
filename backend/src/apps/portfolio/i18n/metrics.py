from modeltranslation.translator import TranslationOptions, translator

from src.apps.portfolio.models import Metric


class MetricTranslationOptions(TranslationOptions):
    fields = (
        "name",
        "description",
    )


translator.register(Metric, MetricTranslationOptions)
