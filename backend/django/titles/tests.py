from django.test import TestCase
from rest_framework.test import APITestCase, APIRequestFactory, force_authenticate
from django.contrib.auth import get_user_model
from django.urls import reverse
from .models import Title, Obtained
from .views import titles

# Create your tests here.
User = get_user_model()
# request 생성
factory = APIRequestFactory()

class TitlesTest(APITestCase):
    def setUp(self):
        self.url = reverse('titles:titles', kwargs={ 'userId': 1 })
        self.title1 = Title.objects.create(titleId=1, titleName="칭호 없음", titleDescription="획득한 칭호 없음", titlePictureUrl="")
        self.title2 = Title.objects.create(titleId=2, titleName="심봤다", titleDescription="당신은 산삼킬러", titlePictureUrl="")
        self.title3 = Title.objects.create(titleId=3, titleName="도라지 마스터", titleDescription="당신은 도라지킬러", titlePictureUrl="")
        self.user = User.objects.create(id=1, username="test", password="1234")
        self.obtained1 = Obtained.objects.create(titleId=self.title1, userId=self.user)
        self.obtained2 = Obtained.objects.create(titleId=self.title2, userId=self.user)

    
    # 사용자 별 전체 칭호 조회 성공
    def test_get_all_titles_success(self):
        user = User.objects.get(id=1)
        print(user)
        request = factory.get(self.url)
        force_authenticate(request, user=user)
        response = titles(request, 1)
        self.assertEqual(response.status_code, 200)

    # 사용자 별 전체 칭호 조회 실패: 로그인 안됐을 때
    def test_get_all_titles_fail(self):
        request = factory.get(self.url)
        response = titles(request, 1)
        self.assertEqual(response.status_code, 401)

    # 대표 칭호 등록 성공
    def test_register_title_success(self):
        data = {
            'titleId': 2
        }
        user = User.objects.get(id=1)
        request = factory.put(self.url, data)
        force_authenticate(request, user=user)
        response = titles(request, 1)
        self.assertEqual(response.status_code, 200)
    
    # 대표 칭호 등록 실패: 로그인 안됐을 때
    def test_resgister_title_fail_login(self):
        data = {
            'titleId': 2
        }
        request = factory.put(self.url, data)
        response = titles(request, 1)
        self.assertEqual(response.status_code, 401)

    # 대표 칭호 등록 실패: 없는 칭호 요청을 보냈을 때
    def test_register_title_fail_undefined(self):
        data = {
            'titleId': 4
        }
        user = User.objects.get(id=1)
        request = factory.put(self.url, data)
        force_authenticate(request, user=user)
        response = titles(request, 1)
        self.assertEqual(response.status_code, 404)

    # 대표 칭호 등록 실패: 획득하지 않은 칭호를 대표 칭호로 등록하려고 할 때
    def test_register_title_fail_notobtained(self):
        data = {
            'titleId': 3
        }
        user = User.objects.get(id=1)
        request = factory.put(self.url, data)
        force_authenticate(request, user=user)
        response = titles(request, 1)
        self.assertEqual(response.status_code, 404)
    
    # 대표 칭호 등록: 이미 대표 칭호로 등록된 칭호를 다시 등록하려고 할 때
    def test_register_title_once_more(self):
        data = {
            'titleId': 1
        }
        user = User.objects.get(id=1)
        request = factory.put(self.url, data)
        force_authenticate(request, user=user)
        response = titles(request, 1)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data['message'], '이미 등록된 칭호입니다.')        

    # 새로운 칭호 획득 성공
    def test_obtain_title_success(self):
        data = {
            'titleId': 3
        }
        user = User.objects.get(id=1)
        request = factory.post(self.url, data)
        force_authenticate(request, user=user)
        response = titles(request, 1)
        self.assertEqual(response.status_code, 201)

    # 새로운 칭호 획득 실패: 로그인 안됐을 때
    def test_obtain_title_fail_login(self):
        data = {
            'titleId': 3
        }
        request = factory.post(self.url, data)
        response = titles(request, 1)
        self.assertEqual(response.status_code, 401)

    # 새로운 칭호 획득 실패: 없는 칭호 요청을 보냈을 때
    def test_obtain_title_fail_undefined(self):
        data = {
            'titleId': 4
        }
        user = User.objects.get(id=1)
        request = factory.post(self.url, data)
        force_authenticate(request, user=user)
        response = titles(request, 1)
        self.assertEqual(response.status_code, 404)