from django.db import models

# Create your models here.

class Repaso(models.Model):
    name = models.CharField(max_length=254)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return f'{self.name}'