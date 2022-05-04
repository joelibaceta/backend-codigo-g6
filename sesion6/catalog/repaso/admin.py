from django.contrib import admin

# Register your models here.
from .models import Repaso


@admin.register(Repaso)
class RepasoAdmin(admin.ModelAdmin):
    pass