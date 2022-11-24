from django.db import models

# Create your models here.
class Location(models.Model):
    locationId = models.AutoField(primary_key=True)
    areaId = models.IntegerField()
    areaName = models.CharField(max_length=50)
    sigunguId = models.IntegerField()
    sigunguName = models.CharField(max_length=50)