from django.forms import TextInput, ModelForm

from src.apps.metrics.models import MetricGoal


class MetricGoalForm(ModelForm):
    class Meta:
        model = MetricGoal
        fields = "__all__"
        widgets = {
            "color": TextInput(attrs={"type": "color"}),
        }
