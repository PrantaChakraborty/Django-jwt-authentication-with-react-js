from django.urls import path
from rest_framework_simplejwt import views
from .views import ObtainTokenPairWithAgeView


urlpatterns = [
    path('token/obtain/', ObtainTokenPairWithAgeView.as_view(), name='token_create'),
    path('token/refresh/', views.TokenRefreshView.as_view(), name='token_refresh'),
]
