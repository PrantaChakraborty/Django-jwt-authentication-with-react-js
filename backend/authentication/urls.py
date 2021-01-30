from django.urls import path
from rest_framework_simplejwt import views
from .views import ObtainTokenPairWithAgeView, CustomUserCreate


urlpatterns = [
    path('user/create/', CustomUserCreate.as_view(), name='create_user'),
    path('token/obtain/', ObtainTokenPairWithAgeView.as_view(), name='token_create'),
    path('token/refresh/', views.TokenRefreshView.as_view(), name='token_refresh'),
]
