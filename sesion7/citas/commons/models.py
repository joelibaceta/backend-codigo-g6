from django.contrib.auth.models import User
from django.db import models


# Create your models here.

class Gender(models.Model):
    short_name = models.CharField(max_length=5)
    long_name = models.CharField(max_length=50)
    is_active = models.BooleanField(default=True)

    class Meta:
        verbose_name = 'Gender'
        verbose_name_plural = 'Genders'

    def __str__(self):
        return self.long_name


class DocumentType(models.Model):
    long_name = models.CharField(max_length=254)
    short_name = models.CharField(max_length=55)
    character_length = models.SmallIntegerField()
    type_character = models.CharField(max_length=100)
    is_active = models.BooleanField(default=True)

    class Meta:
        verbose_name = 'DocumentType'
        verbose_name_plural = 'DocumentTypes'

    def __str__(self):
        return self.short_name


class Profile(models.Model):
    user = models.OneToOneField(
        User, on_delete=models.CASCADE,
        related_name='profile'
    )
    avatar = models.ImageField(
        upload_to='static/images/avatar/',
        default='static/images/avatar/default.png'
    )
    gender = models.ForeignKey(Gender, on_delete=models.CASCADE)
    document_type = models.ForeignKey(DocumentType, on_delete=models.CASCADE)
    document_number = models.CharField(max_length=15)
    phone = models.CharField(max_length=15)

    def __str__(self):
        return self.user.get_full_name()