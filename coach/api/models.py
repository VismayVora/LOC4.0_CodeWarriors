from django.db import models
from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractUser
from rest_framework.authtoken.models import Token

from django.conf import settings

# Create your models here.
class UserManager(BaseUserManager):
    """
    Custom user model manager where email is the unique identifier
    for authentication instead of usernames.
    """
    def create_user(self, email, password, **extra_fields):
        """
        Create and save a User with the given email and password.
        """
        if not email:
            raise ValueError('The Email must be set')

        user = self.model(email=self.normalize_email(email), **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password, **extra_fields):
        """
        Create and save a superuser with the given email and password.
        """
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')
        return self.create_user(email, password, **extra_fields)

SPORT_CHOICES = [
        ('CKT', 'Cricket'),
        ('FB', 'Football'),
        ('T', 'Tennis'),
        ('BB', 'Basketball'),
        ('B', 'Badminton'),
        ('TT', 'Table Tennis')
    ]

class Player(AbstractUser):
    username=None

    # extra fields
    email = models.EmailField(("Email Address"),primary_key=True)
    #sport = models.CharField(max_length=3,choices=SPORT_CHOICES)
    name = models.CharField(max_length=30,null=True,blank=True)
    weight = models.PositiveIntegerField(default=68)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS=['name','weight']

    objects = UserManager()

    def __str__(self):
        return self.name or ''

    @property
    def token(self):
        token = Token.objects.get(user=Player.objects.get(self.id))
        return token

class Activity(models.Model):
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='Owner', on_delete=models.CASCADE)
    sport = models.CharField(max_length=3,choices=SPORT_CHOICES)
    image = models.ImageField(null=True,blank=True)
    name = models.CharField(max_length = 30)
    video_link = models.URLField()
    description = models.TextField()
    completion_status = models.BooleanField(default = False)

class Event(models.Model):
    date = models.DateField()
    time = models.CharField(max_length=50)
    name = models.CharField(max_length = 30)
    location = models.TextField(max_length=100,null=True,blank=True)
    image = models.ImageField(null=True,blank=True)
    organiser = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='Organiser', on_delete=models.CASCADE,null=True,blank=True)
    participant_limit = models.IntegerField(blank=True,null=True)
    token = models.CharField(max_length=100,null=True)

class JoinedEvents(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='JoinedOwner', on_delete=models.CASCADE,null=True,blank=True)
    event = models.ForeignKey(Event,related_name='JoinedEvent', on_delete = models.CASCADE,null=True,blank=True)
    members = models.PositiveIntegerField(default=1)
    eventId=models.CharField(max_length=50)
    tokenNo=models.CharField(max_length=255)

#class Leaderboard
class WeeklyData(models.Model):
    arms = models.IntegerField()
    cores = models.IntegerField()
    legs = models.IntegerField()
    intensive_workout = models.IntegerField()
    push_ups = models.BooleanField(default=False,null=True,blank=True)
    pull_ups = models.BooleanField(default=False,null=True,blank=True)
    plank = models.BooleanField(default=False,null=True,blank=True)
    crunches = models.BooleanField(default=False,null=True,blank=True)
    mountain_climbers = models.BooleanField(default=False,null=True,blank=True)
    jumping_jack = models.BooleanField(default=False,null=True,blank=True)
    squats = models.BooleanField(default=False,null=True,blank=True)
    lunges = models.BooleanField(default=False,null=True,blank=True)
    date_created = models.DateTimeField(auto_now_add=True)

    

