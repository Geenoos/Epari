from django.test import TestCase
from rest_framework.test import APITestCase, APIRequestFactory, force_authenticate
from django.contrib.auth import get_user_model
from django.urls import reverse
from plantbook.models import Collect, Plant
from titles.models import Title
from .views import tourist_spot
import pandas as pd

# Create your tests here.
User = get_user_model()
# request 생성
factory = APIRequestFactory()

class LocationsTest(APITestCase):
  def setUp(self):
    self.plant1 = Plant.objects.create(plantId=1, plantName='분홍달맞이꽃', disabledIconUrl='', activeIconUrl='', detailPictureUrl='', plantDescription='')
    self.title1 = Title.objects.create(titleId=1, titleName='칭호 없음', titleDescription='획득한 칭호 없음', titlePictureUrl='')
    self.user = User.objects.create(id=1, username='test', password='1234', titleId=self.title1)
    self.collect1 = Collect.objects.create(collectId=1, plantId=self.plant1, collectPictureUrl='', collectDate=pd.Timestamp('2022-01-01T21:19:34'), collectContent='', userId=self.user, collectPlace='서울시 동작구 사당로30길 158-2')
    self.collect2 = Collect.objects.create(collectId=2, plantId=self.plant1, collectPictureUrl='', collectDate=pd.Timestamp('2022-01-01T21:19:34'), collectContent='', userId=self.user, collectPlace='서울시 동작구 사당로30길 158-2')
    self.collect3 = Collect.objects.create(collectId=3, plantId=self.plant1, collectPictureUrl='', collectDate=pd.Timestamp('2022-01-01T21:19:34'), collectContent='', userId=self.user, collectPlace='서울시 동작구 사당로30길 158-2')
  # 관광지 추천 성공
  def test_tourist_spot_success(self):
    user = User.objects.get()
    request = factory.get(reverse('locations:tourist_spot', kwargs={ 'plantId': 2 }))
    force_authenticate(request, user=user)
    response = tourist_spot(request, 2)
    self.assertEqual(response.status_code, 200)
    
  # 관광지 추천 성공: 관광지 결과가 없는 경우
  def test_tourtist_spot_success_nothing(self):
    user = User.objects.get()
    request = factory.get(reverse('locations:tourist_spot', kwargs={ 'plantId': 2 }))
    force_authenticate(request, user=user)
    response = tourist_spot(request, 2)
    self.assertEqual(response.status_code, 206)

  # 관광지 추천 실패: 이미 수집했을 때
  def test_tourist_spot_fail_collected(self):
    user = User.objects.get()
    request = factory.get(reverse('locations:tourist_spot', kwargs={ 'plantId': 1 }))
    force_authenticate(request, user=user)
    response = tourist_spot(request, 1)
    self.assertEqual(response.status_code, 406)
