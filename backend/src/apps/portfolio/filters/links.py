import django_filters.rest_framework as filters

from src.apps.portfolio.models import Link


class LinkFilter(filters.FilterSet):
    collections = filters.BaseInFilter(
        field_name="collections__slug",
        lookup_expr="in",
    )

    class Meta:
        model = Link
        fields = ("collections",)
