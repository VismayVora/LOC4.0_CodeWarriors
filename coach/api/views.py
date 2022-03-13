from django.contrib.auth import authenticate,login

from rest_framework.authtoken.models import Token
from rest_framework import status,permissions,viewsets

from .cron import my_cron_job

from .models import *
from .serializers import *

from rest_framework.response import Response
from rest_framework.generics import GenericAPIView
from rest_framework.decorators import action,api_view

from django.http import JsonResponse
from rest_framework.permissions import AllowAny

import datetime

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

class WeeklyDataAPI(GenericAPIView):

	serializer_class = WeeklyDataSerializer

	def post(self,request,*args,**kwargs):
		serializer = self.serializer_class(data=request.data)

		my_date = datetime.date.today()
		year, week_num, day_of_week = my_date.isocalendar()
			
		while (my_cron_job(week_num) <= 6):
			if serializer.is_valid(raise_exception=True):
				if serializer.data['1'] == True:
					serializer.data['arms'] = serializer.data['arms'] + 5
				
				if serializer.data['2'] == True:
					serializer.data['arms'] = serializer.data['arms'] + 10

				if serializer.data['3'] == True:
					serializer.data['cores'] = serializer.data['cores'] + 5
				
				if serializer.data['4'] == True:
					serializer.data['cores'] = serializer.data['cores'] + 10
				
				if serializer.data['5'] == True:
					serializer.data['intensive_workout'] = serializer.data['intensive_workout'] + 10
				
				if serializer.data['6'] == True:
					serializer.data['intensive_workout'] = serializer.data['intensive_workout'] + 10
				
				if serializer.data['7'] == True:
					serializer.data['legs'] = serializer.data['legs'] + 5
				
				if serializer.data['8'] == True:
					serializer.data['legs'] = serializer.data['legs'] + 10
				
				serializer.save()
			# Restart loop logic
			i = i + 1
			if my_cron_job(week_num) == 0:
				i = 0

			
			


		








