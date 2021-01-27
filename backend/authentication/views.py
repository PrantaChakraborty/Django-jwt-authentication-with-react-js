from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import permissions

from .serializers import MyTokenObtainPairSerializer


# view 'age' field with user details in token
class ObtainTokenPairWithAgeView(TokenObtainPairView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = MyTokenObtainPairSerializer
