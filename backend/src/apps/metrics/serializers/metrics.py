from rest_framework import serializers

from src.apps.metrics.models import Metric, MetricRecord


class MetricCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Metric
        fields = (
            "slug",
            "name",
            "description",
        )


class MetricRetrieveSerializer(serializers.ModelSerializer):
    class Meta:
        model = Metric
        fields = (
            "id",
            "slug",
            "name",
            "description",
            "value",
        )


class MetricListSerializer(MetricRetrieveSerializer):
    pass
