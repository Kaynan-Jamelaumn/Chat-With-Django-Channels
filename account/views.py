from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, logout as logout_handler, login as auth_login
from django.views.decorators.http import require_http_methods
from django.contrib.auth.models import User
from django.db import IntegrityError
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
        return redirect('home')
    if request.method == 'GET':
        return render(request, 'account/login.html')
    if request.method == 'POST':
        password = request.POST.get('password')
        username = request.POST.get('username')
        print(username, password)
        if is_valid_password(password) == False:
            return render(request, 'account/login.html', {'error': 'Invalid Password'})
        try:
            if is_valid_username(username) == False:
                return render(request, 'account/login.html', {'error': 'Invalid Username'})
            user = authenticate(request, username=username, password=password)
        except Exception:
            if is_valid_email(username) == False:
                return render(request, 'account/login.html', {'error': 'Invalid E-mail'})
            user = authenticate(request, email=username, password=password)
        if user is None:
            return render(request, 'account/login.html', {'error': 'Invalid credentials'})
        auth_login(request, user)
        return redirect('home')


@require_http_methods(["GET"])
def logout(request):
    logout_handler(request)
    return redirect('home')


@require_http_methods(["GET", "POST"])
def register(request):
    if request.user.is_authenticated:
        return redirect('home')

    if request.method == 'GET':
        return render(request, 'account/register.html')

    if request.method == 'POST':
        username = request.POST.get('username')
        email = request.POST.get('email')
        matchEmail = request.POST.get('email-confirmation')
        password = request.POST.get('password')   # Set the hashed password
        matchPassword = request.POST.get('password-confirmation')
        if not is_valid_password(password) or not is_valid_username(username) or not is_valid_email(email) or password != matchPassword or email != matchEmail:
            return render(request, 'account/register.html', {'error': 'Invalid credentials'})
        try:
            user = User.objects.create_user(
                username=username, email=email, password=password)
            user.save()
            login(request, user)
            return redirect('home')
        except IntegrityError as e:
            if 'UNIQUE constraint failed: auth_user.email' in str(e):
                return render(request, 'account/login.html', {'error': 'Email already exists'})
            elif 'UNIQUE constraint failed: auth_user.username' in str(e):
                return render(request, 'account/login.html', {'error': 'Username already exists'})


@require_http_methods(["GET", "POST"])
def update(request):
    if not request.user.is_authenticated:
        return redirect('home')

    if request.method == 'GET':
        return render(request, 'account/update.html')

    if request.method == 'POST':
        username = request.POST.get('username')
        matchUsername = request.POST.get('email-confirmation')
        password = request.POST.get('password')
        matchPassword = request.POST.get('password-confirmation')
        if not is_valid_password(password) or not is_valid_username(username) or password != matchPassword or username != matchUsername:
            return render(request, 'account/update.html', {'error': 'Invalid Data'})

        user = request.user
        user.username = username
        user.set_password(password)  # Set the hashed password
        user.save()
        return redirect('home')
