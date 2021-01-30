from django.db import models

# Create your models here.


class About(models.Model):
    name = models.CharField(max_length=50)
    address = models.CharField(max_length=100)
    phone_no = models.CharField(max_length=11)

    def __str__(self):
        return self.name
