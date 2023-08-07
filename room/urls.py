from django.urls import path
from . import views

app_name = 'room'

urlpatterns = [
    path('', views.home, name='home'),
    path('room/<slug>', views.room, name='room'),
]
