from django.urls import path
from . import views

app_name = 'plantbook'

urlpatterns = [
    path('', views.plant_list_or_create, name='list_or_create'),
    path('<int:plantId>', views.plant_detail, name='detail'),
]
