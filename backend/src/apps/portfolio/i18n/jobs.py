from modeltranslation.translator import TranslationOptions, translator

from src.apps.portfolio.models import Job


class JobTranslationOptions(TranslationOptions):
    fields = (
        "name",
        "description",
    )


translator.register(Job, JobTranslationOptions)
