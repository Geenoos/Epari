from rest_framework import serializers
from .models import Collect, Plant

class PlantListSerializer(serializers.ModelSerializer):
    isCollected = serializers.BooleanField(read_only=True)
    collectionCnt = serializers.IntegerField(read_only=True)

    class Meta:
        model = Plant
        # fields = '__all__'
        fields = ('plantId', 'plantName', 'season', 'classification', 'isCollected', 'detailPictureUrl', 'plantDescription', 'collectionCnt',)
        # exclude = ('detailPictureUrl', 'plantDescription', )

class CollectSerializer(serializers.ModelSerializer):

    class Meta:
        model = Collect
        fields = '__all__'

class PlantSerializer(serializers.ModelSerializer):
    collection = CollectSerializer(many=True, read_only=True)

    class Meta:
        model = Plant
        fields = ('plantId', 'plantName', 'detailPictureUrl', 'plantDescription', 'season', 'classification', 'collection')
        # exclude = ('disabledIconUrl', 'activeIconUrl', )