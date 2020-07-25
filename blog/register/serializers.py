from rest_framework import serializers
from rest_framework import serializers
from .models import UserAPI

class UserApiSerializer(serializers.Serializer):
    email=serializers.CharField()
    password=serializers.CharField(min_length=8)

    def create(self,validated_data):
        return UserAPI.objects.create(**validated_data)
    
    # def update(self,instance,validated_data):
    #     instance.email=validated_data.get('email',instance.email)
    #     instance.password=validated_data.get('password',instance.password)
    #     instance.save()
    #     return instance