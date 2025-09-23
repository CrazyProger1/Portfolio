from modeltranslation.translator import TranslationOptions, translator

from src.apps.portfolio.models import Link


class LinkTranslationOptions(TranslationOptions):
    fields = (
        "name",
        "description",
    )


translator.register(Link, LinkTranslationOptions)
