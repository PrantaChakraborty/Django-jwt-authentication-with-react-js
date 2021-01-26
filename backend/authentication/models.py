from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.

# custom user model


class CustomUser(AbstractUser):
    age = models.PositiveIntegerField(blank=False, null=False,  max_length=3)
