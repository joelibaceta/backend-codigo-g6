from django.contrib import admin
from core.models import Task

# Register your models here.
class TaskAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'created_at', 'updated_at')
    list_filter = ('name', 'description', 'created_at', 'updated_at')
    search_fields = ('name', 'description', 'created_at', 'updated_at')

admin.site.register(Task, TaskAdmin)