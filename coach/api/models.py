from django.db import models
from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractUser
from rest_framework.authtoken.models import Token

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

class Player(AbstractUser):
    username=None

    SPORT_CHOICES = [
        ('CKT', 'Cricket'),
        ('FB', 'Football'),
        ('T', 'Tennis'),
        ('BB', 'Basketball'),
        ('B', 'Badminton'),
        ('TT', 'Table Tennis')
    ]

    # extra fields
    email = models.EmailField(("Email Address"),primary_key=True)
    sport = models.CharField(max_length=3,choices=SPORT_CHOICES)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS=[]

    objects = UserManager()

    def __str__(self):
        return self.email

    @property
    def token(self):
        token = Token.objects.get(user=Player.objects.get(self.id))
        return token
