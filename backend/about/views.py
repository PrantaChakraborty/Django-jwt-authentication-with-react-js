from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view,permission_classes
from rest_framework import permissions
from .models import About
from .serializers import AboutSerializers


@api_view(['GET'])
@permission_classes(permissions.AllowAny)
def about_view(request):
    about = About.objects.all()
    serializer = AboutSerializers(about, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


