from rest_framework.response import Response
from rest_framework.views import APIView
from .models import UserAPI
from .serializers import UserApiSerializer
from django.shortcuts import get_object_or_404
from django.contrib.auth.password_validation import validate_password

# Create your views here.
class UserAPIView(APIView):
    def post(self,request):
        queryset=request.data
        serializer=UserApiSerializer(data=queryset)
        if serializer.is_valid(raise_exception=True):
            save_data=serializer.save()
        return Response({"Success":"User '{}' created successfully".format(save_data.email)})
