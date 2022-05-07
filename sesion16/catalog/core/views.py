from django.shortcuts import render

from core.models import Movie

from rest_framework.views import APIView
from rest_framework.response import Response


class MovieAPIView(APIView):

    def get(self, request):
        movies = Movie.all()
        return Response(movies)

    def post(self, request):
        data = request.data
        movie = Movie()
        movie.insert(data)
        return Response(data)

class MovieSearchAPIView(APIView):

    def get(self, request):
        query = request.GET.dict()
        print(query)
        movies = Movie.search(query)
        return Response(movies)