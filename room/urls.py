from django.urls import path
from . import views
app_name = 'room'

urlpatterns = [
    path('', views.home, name='home'),
    path('<slug:slug>/', views.room, name='room'),

]
