from django.contrib import admin

# Register your models here.
from .models import Gender, DocumentType, Profile


@admin.register(Gender)
class GenderAdmin(admin.ModelAdmin):
    list_display = [
        'short_name',
        'long_name',
        'is_active'
    ]


@admin.register(DocumentType)
class GenderAdmin(admin.ModelAdmin):
    list_display = [
        'long_name',
        'short_name',
        'character_length',
        'type_character',
        'is_active'
    ]

@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = [
        'user',
        'avatar',
        'gender',
        'document_type',
        'document_number',
        'phone'
    ]
