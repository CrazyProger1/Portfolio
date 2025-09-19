from rest_framework import serializers

from src.apps.portfolio.models import WorkArea


class AreaRetrieveSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkArea
        fields = "__all__"
