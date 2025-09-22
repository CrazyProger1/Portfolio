from modeltranslation.translator import TranslationOptions, translator

from src.apps.portfolio.models import TextBlock


class TextBlockTranslationOptions(TranslationOptions):
    fields = ("name", "content",)


translator.register(TextBlock, TextBlockTranslationOptions)
