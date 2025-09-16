from rest_framework import routers

from src.apps.portfolio.views import SkillViewSet, ProjectViewSet, JobViewSet

router = routers.SimpleRouter()
router.register("api/v1/skills", SkillViewSet, basename="skills")
router.register("api/v1/jobs", JobViewSet, basename="jobs")
router.register("api/v1/projects", ProjectViewSet, basename="projects")

urlpatterns = [
    *router.urls,
]
