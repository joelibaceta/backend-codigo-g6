from django.urls import path, include

from web.views import gender_list, index

urlpatterns = [
    path('', index),
    path('genders', gender_list)
]
