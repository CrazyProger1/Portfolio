from rest_framework import routers

from src.apps.portfolio.views import (
    SkillViewSet,
    ProjectViewSet,
    JobViewSet,
    LinkViewSet,
    TextBlockViewSet,
    MessageViewSet,
)

router = routers.SimpleRouter()
router.register("api/v1/skills", SkillViewSet, basename="skills")
router.register("api/v1/jobs", JobViewSet, basename="jobs")
router.register("api/v1/projects", ProjectViewSet, basename="projects")
router.register("api/v1/links", LinkViewSet, basename="links")
router.register("api/v1/texts", TextBlockViewSet, basename="texts")
router.register("api/v1/messages", MessageViewSet, basename="messages")

urlpatterns = [
    *router.urls,
]
