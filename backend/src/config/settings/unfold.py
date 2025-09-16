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
                        "link": reverse_lazy("admin:accounts_apikeypermission_changelist"),
                    },
                ],
            },
            {
                "title": _("Portfolio"),
                "collapsible": True,
                "items": [
                    {
                        "title": _("Skill"),
                        "icon": "person_play",
                        "link": reverse_lazy("admin:portfolio_skill_changelist"),
                    },
                    {
                        "title": _("Project"),
                        "icon": "enterprise",
                        "link": lambda request: (
                                reverse_lazy("admin:portfolio_project_changelist")
                                + f"?users__id__exact={request.user.id}"
                        ),
                    },
                    {
                        "title": _("Job"),
                        "icon": "engineering",
                        "link": lambda request: (
                                reverse_lazy("admin:portfolio_job_changelist")
                                + f"?user__id__exact={request.user.id}"
                        ),
                    },
                    {
                        "title": _("Job Area"),
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
