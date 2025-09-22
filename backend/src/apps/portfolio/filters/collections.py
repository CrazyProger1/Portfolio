import django_filters.rest_framework as filters


class CollectionFilterMixin(filters.FilterSet):
    collections = filters.BaseInFilter(
        field_name="collections__slug",
        lookup_expr="in",
    )

    def filter_queryset(self, queryset):
        return super().filter_queryset(queryset=queryset).distinct()
