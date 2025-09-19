from modeltranslation.translator import TranslationOptions, translator

from src.apps.portfolio.models import Link, LinkCollection


class LinkTranslationOptions(TranslationOptions):
    fields = (
        "name",
        "description",
    )


class LinkCollectionTranslationOptions(TranslationOptions):
    fields = (
        "name",
        "description",
    )


translator.register(Link, LinkTranslationOptions)
translator.register(LinkCollection, LinkCollectionTranslationOptions)
