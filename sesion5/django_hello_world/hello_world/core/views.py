from django.shortcuts import render

# Vistas basadas en funciones

# /hello/
def hello_world(request):
    """Retorna una plantilla HTML con un saludo"""
    return render(request, 'hello.html')

# /hello/<str:name>/
def hello_name(request, name):
    """Retorna una plantilla HTML con un saludo a un nombre 
    obtenido a partir de la URL"""
    return render(request, 'hello_name.html', {'name': name})

# /hello?name=<str:name>
def hello_name_params(request):
    """Retorna una plantilla HTML con un saludo a un nombre
    obtenido a partir de un QueryString"""
    name = request.GET.get('name')
    if name == "" or name == None:
        name = "Anónimo"
    return render(request, 'hello_name.html', {'name': name})