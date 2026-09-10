from modeltranslation.translator import TranslationOptions, translator

from src.apps.portfolio.models import Hobby, HobbyTag


class HobbyTranslationOptions(TranslationOptions):
    fields = (
        "name",
        "description",
    )


class HobbyTagTranslationOptions(TranslationOptions):
    fields = ("name",)


translator.register(Hobby, HobbyTranslationOptions)
translator.register(HobbyTag, HobbyTagTranslationOptions)
