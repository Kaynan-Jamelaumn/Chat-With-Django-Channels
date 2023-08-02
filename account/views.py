from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, logout as logout_handler, login as auth_login
from django.views.decorators.http import require_http_methods
from django.contrib.auth.models import User
import re


def is_valid_password(password):
    regex = r'^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$'
    return re.match(regex, password) is not None


def is_valid_email(email):
    regex = r'^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$'
    return re.match(regex, email) is not None


def is_valid_username(username):
    regex = r'^[a-zA-Z0-9_]{4,32}$'
    return re.match(regex, username) is not None


# Create your views here.
@require_http_methods(["GET", "POST"])
def login(request):
    if request.user.is_authenticated:
        return redirect('project:home')
    if request.method == 'GET':
        return render(request, 'account/login.html')
    if request.method == 'POST':
        password = request.POST.get('password')
        username = request.POST.get('username')
        if is_valid_password(password) == False:
            return render(request, 'account/login.html', {'error': 'Invalid credentials'})

        if username:
            if is_valid_username(username) == False:
                return render(request, 'account/login.html', {'error': 'Invalid credentials'})
            user = authenticate(request, username=username, password=password)
        else:
            if is_valid_email(email) == False:
                return render(request, 'account/login.html', {'error': 'Invalid credentials'})
            email = request.POST.get('email')
            user = authenticate(request, username=email, password=password)
        if user is None:
            return render(request, 'account/login.html', {'error': 'Invalid credentials'})
        auth_login(request, user)
        return redirect('project:home')


@require_http_methods(["GET"])
def logout(request):
    logout_handler(request)
    return redirect('project:home')


@require_http_methods(["GET", "POST"])
def register(request):
    if request.user.is_authenticated:
        return redirect('project:home')

    if request.method == 'GET':
        return render(request, 'account/register.html')

    if request.method == 'POST':
        username = request.POST.get('username')
        email = request.POST.get('email')
        matchEmail = request.POST.get('matchEmail')
        password = request.POST.get('password')   # Set the hashed password
        matchPassword = request.POST.get('matchpassword')
        if not is_valid_password(password) or not is_valid_username(username) or not is_valid_email(email) or password != matchPassword or email != matchEmail:
            return render(request, 'account/register.html', {'error': 'Invalid credentials'})

        user = User.objects.create_user(
            username=username, email=email, password=password)
        user.save()
        login(request, user)
        return redirect('project:home')


@require_http_methods(["GET", "POST"])
def update(request):
    if request.user.is_authenticated:
        return redirect('project:home')

    if request.method == 'GET':
        return render(request, 'account/register.html')

    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        matchPassword = request.POST.get('matchpassword')
        if not is_valid_password(password) or not is_valid_username(username) or password != matchPassword:
            return render(request, 'account/register.html', {'error': 'Invalid Data'})

        user = request.user
        user.username = username
        user.set_password(password)  # Set the hashed password
        user.save()
        return redirect('project:home')
