from django.shortcuts import render
from room.models import Room


def home(request):
    rooms = Room.objects.all()
    return render(request, 'index.html', {'rooms': rooms})
