from django.contrib.auth.models import AbstractUser
from simple_history import register


class User(AbstractUser):
    pass


register(User, inherit=True)
