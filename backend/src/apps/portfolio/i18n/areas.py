from modeltranslation.translator import TranslationOptions, translator

from src.apps.portfolio.models import WorkArea


class WorkAreaTranslationOptions(TranslationOptions):
    fields = ("name",)


translator.register(WorkArea, WorkAreaTranslationOptions)
