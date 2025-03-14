from rest_framework import routers

from src.apps.metrics.views import MetricViewSet

router = routers.SimpleRouter()
router.register("api/v1/metrics", MetricViewSet)

urlpatterns = [
    *router.urls,
]
