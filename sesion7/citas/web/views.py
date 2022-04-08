from django.shortcuts import render

# Create your views here.
from commons.models import Gender


def index(request):
    context = {}
    context['segment'] = 'index'

    return render(request, 'index.html', context)


def gender_list(request):
    context = {}
    context['segment'] = 'gender'

    gender = Gender.objects.filter(is_active=True)  # Todos los elementos
    # gender = Gender.objects.all() #Todos los elementos
    print(gender)
    context['genders'] = gender
    return render(request, 'genders/show.html', context)
