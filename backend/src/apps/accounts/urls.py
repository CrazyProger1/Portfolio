from django.urls import path
from rest_framework import routers

from src.apps.accounts.sites import site
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from src.apps.accounts.views.users import UsersViewSet

router = routers.SimpleRouter()
router.register("api/v1/users", UsersViewSet, basename="users")

urlpatterns = [
    path("admin/", site.urls),
    path("api/v1/tokens/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/v1/tokens/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    *router.urls,
]
