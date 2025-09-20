from django.urls import reverse_lazy
from django.utils.translation import gettext_lazy as _

from src.config.settings.base import INSTALLED_APPS, APPLICATION

INSTALLED_APPS = [
    "unfold",
    "unfold.contrib.filters",
    "unfold.contrib.forms",
    "unfold.contrib.inlines",
    "unfold.contrib.import_export",
    "unfold.contrib.guardian",
    *INSTALLED_APPS,
]

UNFOLD = {
    "SITE_TITLE": APPLICATION,
    "SITE_HEADER": APPLICATION,
    "SITE_URL": "/docs",
    "SITE_SYMBOL": "speed",
    "SHOW_HISTORY": True,
    "SHOW_VIEW_ON_SITE": True,
    "THEME": "dark",
    "SIDEBAR": {
        "show_search": True,
        "show_all_applications": True,
        "navigation": [
            {
                "title": _("Accounts"),
                "collapsible": True,
                "items": [
                    {
                        "title": _("Users"),
                        "icon": "person",
                        "link": reverse_lazy("admin:accounts_user_changelist"),
                    },
                    {
                        "title": _("Groups"),
                        "icon": "devices",
                        "link": reverse_lazy("admin:auth_group_changelist"),
                    },
                    {
                        "title": _("API Keys"),
                        "icon": "key",
                        "link": reverse_lazy("admin:accounts_apikey_changelist"),
                    },
                    {
                        "title": _("API Key Permissions"),
                        "icon": "lock_open",
                        "link": reverse_lazy(
                            "admin:accounts_apikeypermission_changelist"
                        ),
                    },
                ],
            },
            {
                "title": _("Portfolio"),
                "collapsible": True,
                "items": [
                    {
                        "title": _("Skills"),
                        "icon": "person_play",
                        "link": reverse_lazy("admin:portfolio_skill_changelist"),
                    },
                    {
                        "title": _("Projects"),
                        "icon": "enterprise",
                        "link": reverse_lazy("admin:portfolio_project_changelist"),
                    },
                    {
                        "title": _("Jobs"),
                        "icon": "engineering",
                        "link": reverse_lazy("admin:portfolio_job_changelist"),
                    },
                    {
                        "title": _("Platforms"),
                        "icon": "captive_portal",
                        "link": reverse_lazy("admin:portfolio_platform_changelist"),
                    },
                    {
                        "title": _("Links"),
                        "icon": "link",
                        "link": reverse_lazy("admin:portfolio_link_changelist"),
                    },
                    {
                        "title": _("Collections"),
                        "icon": "category",
                        "link": reverse_lazy("admin:portfolio_collection_changelist"),
                    },
                    {
                        "title": _("Work Areas"),
                        "icon": "target",
                        "link": reverse_lazy("admin:portfolio_workarea_changelist"),
                    },
                ],
            },
            {
                "title": _("Metrics"),
                "collapsible": True,
                "items": [
                    {
                        "title": _("Statistics"),
                        "icon": "chart_data",
                        "link": reverse_lazy("admin:metrics_statistics"),
                    },
                    {
                        "title": _("Metrics"),
                        "icon": "bar_chart",
                        "link": lambda request: (
                                reverse_lazy("admin:metrics_metric_changelist")
                                + f"?user__id__exact={request.user.id}"
                        ),
                    },
                    {
                        "title": _("Records"),
                        "icon": "schedule",
                        "link": lambda request: (
                                reverse_lazy("admin:metrics_metricrecord_changelist")
                                + f"?user__id__exact={request.user.id}"
                        ),
                    },
                    {
                        "title": _("Goals"),
                        "icon": "target",
                        "link": lambda request: (
                                reverse_lazy("admin:metrics_metricgoal_changelist")
                                + f"?user__id__exact={request.user.id}"
                        ),
                    },
                ],
            },
        ],
    },
}
