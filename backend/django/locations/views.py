from django.shortcuts import get_list_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from locations.serializers import LocationListSerializer
from plantbook.models import Collect
from plantbook.serializers import CollectSerializer
from .models import Location

import requests
import my_settings
import json
from pprint import pprint
# Create your views here.

# 관광지 추천
@api_view(['GET'])
def tourist_spot(request, plantId):
  # 활성화 여부 확인
  if not Collect.objects.filter(plantId=plantId, userId=request.user).exists():
    # 비활성화 >> Collect 모델에서 해당 식물이 가장 많이 채집된 지역 추출
    #################################
    #################################
    # 받아온 지역 처리
    BASE_URL = 'http://apis.data.go.kr/B551011/KorService/areaBasedList'
    # Query
    mobile_os = 'ETC'
    mobile_app = 'Epari'
    # 반환타입
    _type = 'json'
    # 관광타입 = 관광지(12)
    content_type_id = '12'
    # 대분류코드 = 자연(A01)
    cat1 = 'A01'

    # 지역코드
    with open('locations/area_code.json', 'r', encoding='utf-8') as f:
      areas = json.load(f)
    area_code = areas['서울시']
    
    # 시군구코드
    with open('locations/sigungu_code.json', 'r', encoding='utf-8') as f:
      sigungus = json.load(f)
    sigungu_code = sigungus[area_code]['동작구']

    URL = BASE_URL + f'?MobileOS={mobile_os}' + f'&MobileApp={mobile_app}' + f'&_type={_type}' + f'&ServiceKey={my_settings.TOUR_API_KEY}' + f'&contentTypeId={content_type_id}' + f'&cat1={cat1}' + f'&areaCode={area_code}' + f'&sigunguCode={sigungu_code}'
    response = requests.get(URL)
    
    # 결과가 있을 경우(dict형태로 주어짐)
    if isinstance(response.json()['response']['body']['items'], dict):
      return Response(response.json()['response']['body']['items']['item'], status=status.HTTP_200_OK)
    # 결과가 없을 경우(빈 str형태) 시군구 코드르 빼고 재요청
    else:
      URL = BASE_URL + f'?MobileOS={mobile_os}' + f'&MobileApp={mobile_app}' + f'&_type={_type}' + f'&ServiceKey={my_settings.TOUR_API_KEY}' + f'&contentTypeId={content_type_id}' + f'&cat1={cat1}' + f'&areaCode={area_code}'
      response = requests.get(URL)
      return Response(response.json()['response']['body']['items']['item'], status=status.HTTP_206_PARTIAL_CONTENT)
  else:
    data = {
            'message': '이미 수집된 식물입니다.'
        }
    return Response(data, status=status.HTTP_406_NOT_ACCEPTABLE)

# 식물 지도 열람
@api_view(['GET'])
def plant_map(request, userId):
  collects = get_list_or_404(Collect, userId=userId)
  serializer = CollectSerializer(collects, many=True)
  return Response(serializer.data, status=status.HTTP_200_OK)

# 프론트한테 지역 명단 넘겨주기
@api_view(['GET'])
def location_list(request):
  locations = Location.objects.all()
  serializer = LocationListSerializer(locations, many=True)
  return Response(serializer.data, status=status.HTTP_200_OK)