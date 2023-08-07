from django.shortcuts import render

# Create your views here.
from django.shortcuts import redirect
from .models import Room


def home(request):
    if not request.user.is_authenticated:
        return redirect("account:login")
    rooms = Room.objects.all()
    return render(request, 'room/room.html', {'rooms': rooms})


def room(request, slug):
    if not request.user.is_authenticated:
        return redirect("account:login")
    room = Room.objects.get(slug=slug)
    return render(request, 'room/room.html', {'room': room})
