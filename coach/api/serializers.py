from rest_framework import serializers
from rest_framework.validators import UniqueValidator
import re
from .models import *

email_pattern = re.compile(r"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)")

class RegisterSerializer(serializers.ModelSerializer):
	password=serializers.CharField(max_length=32,min_length=8,write_only = True)
	
	class Meta:
		model = Player
		fields = ['email','password','sport']
		
	def validate(self,attrs):
		email = attrs.get('email',' ')

		if not email_pattern.match(email):
			raise serializers.ValidationError('Please enter a valid email!')
		return attrs
		
	def create(self,validated_data):
            validated_data['is_active'] = True
            return Player.objects.create_user(**validated_data)

class LoginSerializer(serializers.ModelSerializer):
    password=serializers.CharField(max_length=32,min_length=8,write_only = True)

    class Meta:
        model = Player
        fields = ['email','password']


