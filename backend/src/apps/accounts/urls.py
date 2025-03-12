from django.urls import path

from src.apps.accounts.sites import site

urlpatterns = [
    path("admin/", site.urls),
]
