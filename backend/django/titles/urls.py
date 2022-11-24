from django.urls import path
from . import views

app_name = 'titles'

urlpatterns = [
    path('', views.titles, name='titles'),
]
