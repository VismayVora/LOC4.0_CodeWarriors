from django.urls import path
from . import views
from django.conf.urls import include
from rest_framework.routers import DefaultRouter

from django.conf import settings
from django.conf.urls.static import static


router = DefaultRouter()
#router.register(r'', views.xyzAPI)


urlpatterns = [
    #path('', include(router.urls)),
    path('register/', views.RegisterAPI.as_view(), name = 'register'),
    path('login/', views.LoginAPI.as_view(), name = 'login'),
]

if settings.DEBUG:
        urlpatterns += static(settings.MEDIA_URL,
                              document_root=settings.MEDIA_ROOT)