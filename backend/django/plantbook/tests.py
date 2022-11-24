from django.test import TestCase
from rest_framework.test import APITestCase, APIRequestFactory, force_authenticate
from django.urls import reverse
from .models import Plant, Collect
from accounts.models import User
from titles.models import Title, Obtained
from .views import plant_list_or_create, plant_detail
from rest_framework import status

factory = APIRequestFactory()
# Create your tests here.
class PlantbookTests(APITestCase):
    def setUp(self):
        self.title1 = Title.objects.create(titleId=1, titleName="칭호없음", titleDescription="칭호없다니까", titlePictureUrl="")
        self.user = User.objects.create(username="kyong0409", password="ssafy1234", email="kyong0409@gmail.com")
        self.obtain1 = Obtained.objects.create(userId=self.user, titleId=self.title1)
        self.plant1 = Plant.objects.create(plantId=1, plantName="도라지", disabledIconUrl="", activeIconUrl="", detailPictureUrl="", plantDescription="우리 팀의 아이덴티티")
        self.plant2 = Plant.objects.create(plantId=2, plantName="더덕", disabledIconUrl="", activeIconUrl="", detailPictureUrl="", plantDescription="도라지 아니고 더덕")
        self.collect1 = Collect.objects.create(collectId=1, plantId=self.plant1, collectPictureUrl="", userId=self.user, collectContent="심봤다~", collectPlace="대구광역시 수성구")
        self.url_list = reverse('plantbook:list_or_create')
        self.url_detail1 = reverse('plantbook:detail', kwargs={ "plantId": 1})
        self.url_detail2 = reverse('plantbook:detail', kwargs={ "plantId": 2})
        self.url_detail3 = reverse('plantbook:detail', kwargs={ "plantId": 3})
    
    def test_get_list_success(self):
        """
        전체 리스트 가져오기 성공
        """
        user = User.objects.get(username="kyong0409")
        request = factory.get(self.url_list)
        force_authenticate(request, user=user)
        response = plant_list_or_create(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_list_fail(self):
        """
        인증되지 않은 유저의 경우 실패
        """
        request = factory.get(self.url_list)
        response = plant_list_or_create(request)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_detail_success(self):
        """
        식물 상세정보 가져오기 성공
        """
        user = User.objects.get(username="kyong0409")
        request = factory.get(self.url_detail1)
        force_authenticate(request, user=user)
        response = plant_detail(request, 1)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_detail_fail_not_obtained(self):
        """
        아직 수집하지 못한 식물에 대한 요청인 경우
        """
        user = User.objects.get(username="kyong0409")
        request = factory.get(self.url_detail2)
        force_authenticate(request, user=user)
        response = plant_detail(request, 2)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

    def test_detail_fail_unauthenticated(self):
        """
        인증되지 않은 사용자인 경우
        """
        request = factory.get(self.url_list)
        response = plant_list_or_create(request)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_detail_fail_undefined(self):
        """
        DB에 없는 식물에 대한 요청인 경우
        """
        user = User.objects.get(username="kyong0409")
        request = factory.get(self.url_detail3)
        force_authenticate(request, user=user)
        response = plant_detail(request, 3)
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_create_plantbook_success(self):
        """
        도감 등록에 관한 test 추가 예정
        """
        pass