import django_filters.rest_framework as filters

from src.apps.portfolio.filters.collections import CollectionFilterMixin
from src.apps.portfolio.models import TextBlock


class TextBlockFilter(CollectionFilterMixin, filters.FilterSet):
    class Meta:
        model = TextBlock
        fields = ("collections",)
