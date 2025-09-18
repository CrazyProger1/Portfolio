from modeltranslation.translator import TranslationOptions, translator

from src.apps.portfolio.models import Platform


class PlatformTranslationOptions(TranslationOptions):
    fields = ("name", "description",)


translator.register(Platform, PlatformTranslationOptions)
