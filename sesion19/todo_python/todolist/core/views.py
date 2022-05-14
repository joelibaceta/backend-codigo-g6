from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response

from core.models import Task

# Create your views here.


class TaskAPI(APIView):

    def post(self, request):
        data = request.data
        task = Task.create(data)
        return Response("OK")

    def get(self, request):
        tasks = Task.list()
        return Response(tasks)