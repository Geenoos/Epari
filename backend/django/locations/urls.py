from django.urls import path
from . import views

app_name = 'locations'

urlpatterns = [
    path('<int:userId>', views.plant_map, name="plant_map"),
    path('spot/<int:plantId>', views.tourist_spot , name="tourist_spot"),
    path('location', views.location_list, name="location_list")
]
