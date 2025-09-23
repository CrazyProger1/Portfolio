from modeltranslation.translator import TranslationOptions, translator

from src.apps.portfolio.models import Skill


class SkillTranslationOptions(TranslationOptions):
    fields = ("name",)


translator.register(Skill, SkillTranslationOptions)
