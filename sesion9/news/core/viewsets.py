from tkinter import Entry
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from core.serializers import NewEntrySerializer, NewEntryModelSerializer
from core.models import NewEntry
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication
from django.contrib.auth.models import AnonymousUser

class NewEntryViewSet(viewsets.ViewSet):
    authentication_classes = [TokenAuthentication,]

    def list(self, request):

        
        entries = NewEntry.objects.all()
        serializer = NewEntrySerializer(entries, many=True)

        result = {
            "status": "success",
            "data": serializer.data
        }

        return Response(result)

    def create(self, request):
        print(request.user)
        if request.user.is_anonymous:
            return Response(status=status.HTTP_401_UNAUTHORIZED)
        else:
          data = request.data
          serializer = NewEntrySerializer(data=data)
          if serializer.is_valid():
              serializer.save()
              return Response(serializer.data, status=status.HTTP_201_CREATED)
          else:
              return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, pk=None):
        entry = NewEntry.objects.get(pk=pk)
        serializer = NewEntrySerializer(entry)
        return Response(serializer.data)

    def update(self, request, pk=None):
        entry = NewEntry.objects.filter(pk=pk)
        serializer = NewEntrySerializer(entry, data=request.data)
        if serializer.is_valid():
            entry.update(**serializer.validated_data)
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def partial_update(self, request, pk=None):
        pass

    def destroy(self, request, pk=None):
        entry = NewEntry.objects.get(pk=pk)
        entry.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class NewEntryModelViewSet(viewsets.ModelViewSet):
    queryset = NewEntry.objects.all()
    serializer_class = NewEntryModelSerializer

class AuthViewset(viewsets.ViewSet):

  def obtain_token(self, request):
    data = request.data
    username = data['username']
    password = data['password']

    user = User.objects.get(username=username)
    if user.check_password(password):
        token = Token.objects.get_or_create(user=user)
        return Response({'token': token[0].key})
    else:
        return Response({'error': 'Wrong username or password'}, status=400)