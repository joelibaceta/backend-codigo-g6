from rest_framework import serializers
from core.models import NewEntry

class NewEntrySerializer(serializers.Serializer):

    title = serializers.CharField(max_length=200)
    content = serializers.CharField()
    created_at = serializers.DateTimeField(read_only=True)
    updated_at = serializers.DateTimeField(read_only=True)
    
    def create(self, validated_data):
        return NewEntry.objects.create(**validated_data)

class NewEntryModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewEntry
        fields = ('title', 'content', 'created_at', 'updated_at')