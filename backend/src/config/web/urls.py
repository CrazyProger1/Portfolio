from django.urls import path, include

urlpatterns = [
    path("", include("src.apps.accounts.urls")),
    path("", include("src.apps.docs.urls")),
    path("", include("src.apps.metrics.urls")),
]
