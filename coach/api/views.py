from django.contrib.auth import authenticate,login

from rest_framework.authtoken.models import Token
from rest_framework import status,permissions,viewsets

from .models import *
from .serializers import *

from rest_framework.response import Response
from rest_framework.generics import GenericAPIView
from rest_framework.decorators import action,api_view

from django.http import JsonResponse
from rest_framework.permissions import AllowAny

# import environ

# env = environ.Env()
# environ.Env.read_env()

# Create your views here.

class RegisterAPI(GenericAPIView):
	
	serializer_class = RegisterSerializer
	
	def post(self,request,*args,**kwargs):
		data = request.data
		serializer = self.serializer_class(data=data)
		serializer.is_valid(raise_exception = True)
		user = serializer.save()
		if not user.is_active:
			user.is_active = True
			user.save()
		token = Token.objects.create(user=user)
		
		return Response({'token' : token.key,'email' : user.email},status = status.HTTP_200_OK)

class LoginAPI(GenericAPIView):
	permission_classes=[permissions.AllowAny]
	serializer_class = LoginSerializer
	
	def post(self,request,*args,**kwargs ):
		email = request.data.get('email',None)
		password = request.data.get('password',None)
		user = authenticate(email = email, password = password)
		if user :
			login(request,user)
			serializer = self.serializer_class(user)
			token = Token.objects.get(user=user)
			return Response({'token' : token.key,'email' : user.email},status = status.HTTP_200_OK)
		return Response('Invalid Credentials',status = status.HTTP_404_NOT_FOUND)

class ActivityDetails(viewsets.ModelViewSet):
	queryset = Activity.objects.all()
	serializer_class = ActivitySerializer
	permission_classes = [permissions.IsAuthenticated]

	def get_queryset(self):
		return Activity.objects.all()
	
	def perform_create(self,serializer):
		serializer.save(owner = self.request.user)
	
	def update(self, request, *args, **kwargs):
		kwargs['partial'] = True
		return super().update(request, *args, **kwargs)

class EventDetails(viewsets.ModelViewSet):
	queryset = Event.objects.all()
	serializer_class = EventSerializer
	permission_classes = [permissions.IsAuthenticated]

	def get_queryset(self):
		return Event.objects.all()
	
	# def perform_create(self,serializer):
	# 	serializer.save(owner = self.request.user)
	
	# def update(self, request, *args, **kwargs):
	# 	kwargs['partial'] = True
	# 	return super().update(request, *args, **kwargs)

class CreateEventAPI(GenericAPIView):
	
	serializer_class = EventSerializer
	
	def post(self,request,*args,**kwargs ):
		serializer = self.serializer_class(data=request.data)
		if serializer.is_valid(raise_exception=True):
			serializer.save()
			curr_event=Event.objects.get(id=serializer.data['id'])
			user_token=serializer.data['token']
			organizer=Player.objects.get(auth_token=user_token)
			curr_event.organiser=organizer
			curr_event.save()
			return Response({'event' : "Event Saved!"},status = status.HTTP_200_OK)
		return Response('Invalid Credentials',status = status.HTTP_404_NOT_FOUND)

class JoinEventAPI(GenericAPIView):

	serializer_class = JoinedEventSerializer
	def post(self,request,*args,**kwargs ):
		serializer = self.serializer_class(data=request.data)
		if serializer.is_valid(raise_exception=True):
			serializer.save()
			curr_joined_event=JoinedEvents.objects.get(id=serializer.data['id'])
			curr_event=Event.objects.get(id=serializer.data['eventId'])
			curr_joined_event.event=curr_event
			num_users=serializer.data['members']
			curr_event.participant_limit = curr_event.participant_limit - num_users
			user_token=serializer.data['tokenNo']
			organizer=Player.objects.get(auth_token=user_token)
			curr_joined_event.organiser=organizer
			curr_joined_event.save()
			curr_event.save()
			return Response({'event' : "Event Saved!"},status = status.HTTP_200_OK)
		return Response('Invalid Credentials',status = status.HTTP_404_NOT_FOUND)





