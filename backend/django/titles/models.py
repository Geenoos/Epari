from django.db import models
# from epari_backend import settings
from accounts.models import User

# Create your models here.
class Title(models.Model):
    titleId = models.AutoField(primary_key=True)
    titleName = models.CharField(max_length=50)
    titleDescription = models.CharField(max_length=200)
    titlePictureUrl = models.CharField(max_length=500)

class Obtained(models.Model):
    titleId = models.ForeignKey(Title, on_delete=models.CASCADE)
    # userId = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="obtained")
    userId = models.ForeignKey(User, on_delete=models.CASCADE, related_name="obtained")
    # 대표칭호 여부
    isRep = models.BooleanField(default=False)