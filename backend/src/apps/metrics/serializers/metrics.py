from rest_framework import serializers

from src.apps.metrics.models import Metric, MetricRecord


class MetricCreateSerializer(serializers.ModelSerializer):
    class Meta:
        pass
