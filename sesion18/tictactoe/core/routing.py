from django.urls import re_path

from core.consumer import TicTacToeConsumer

websocket_urlpatterns = [
    re_path(r'^ws/play/$', TicTacToeConsumer.as_asgi())
]