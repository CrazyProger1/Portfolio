from modeltranslation.translator import TranslationOptions, translator

from src.apps.portfolio.models import Project


class ProjectTranslationOptions(TranslationOptions):
    fields = (
        "name",
        "description",
    )


translator.register(Project, ProjectTranslationOptions)
