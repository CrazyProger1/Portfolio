from split_settings.tools import include, optional

try:
    from dotenv import load_dotenv

    load_dotenv()
except ImportError:
    pass

include(
    "base.py",
    "databases.py",
    "i18n.py",
    "logging.py",
    "security.py",
    "auth.py",
    optional("rest.py"),
    optional("docs.py"),
    optional("cors.py"),
    optional("unfold.py"),
)
