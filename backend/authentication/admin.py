from django.contrib import admin
from .models import CustomUser


class CustomUserAdmin(admin.ModelAdmin):
    model = CustomUser


# register Custom user in admin
admin.site.register(CustomUser, CustomUserAdmin)
