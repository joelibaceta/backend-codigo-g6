from django.shortcuts import render

from django.views import View

# Create your views here.
class GameView(View):

    def get(self, request):
        player = request.GET.get("player")
        context = {
            "player": player
        }
        return render(request, "game.html", context)
