from modeltranslation.translator import TranslationOptions, translator

from src.apps.portfolio.models import Collection


class CollectionTranslationOptions(TranslationOptions):
    fields = (
        "name",
        "description",
    )


translator.register(Collection, CollectionTranslationOptions)
