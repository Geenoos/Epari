import firebase_admin
from firebase_admin import credentials, auth
from rest_framework.response import Response
from rest_framework import status

def is_logined(request):
    id_token = request.META.get('HTTP_AUTHORIZATION')
    try:
        decoded_token = auth.verify_id_token(id_token)
    except:
        decoded_token = None

    return decoded_token

def get_userEmail(token):
    return token['firebase']['identities']['email'][0]