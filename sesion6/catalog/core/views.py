from django.shortcuts import render

# Create your views here.
from catalog.core.models import Product


def index(request):

    product = Product.objects.filter()

    return render(request, 'core/index.html')

