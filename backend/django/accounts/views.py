from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from accounts.models import User

import firebase_admin
from firebase_admin import credentials, auth

# Firebase Admin SDK
if not firebase_admin._apps:
    cred = credentials.Certificate('epari-93d9d-firebase-adminsdk-uhhj6-0ca52f3d8f.json')
    firebase_admin.initialize_app(cred)

@api_view(['POST'])
def login(request):
    # 확인해야함
    id_token = request.META.get('HTTP_AUTHORIZATION')
    decoded_token = auth.verify_id_token(id_token)
    userEmail = decoded_token['firebase']['identities']['email'][0]
    userName = userEmail.split('@')[0]

    if User.objects.filter(userEmail=userEmail).exists():
        data = {
            'message': '성공적으로 로그인되었습니다.'
        }
    else:
        print('hello')
        User.objects.create(userName=userName, userEmail=userEmail)
        data = {
            'message': '새로운 사용자가 DB에 등록되었습니다.'
        }
    return Response(data, status=status.HTTP_200_OK)