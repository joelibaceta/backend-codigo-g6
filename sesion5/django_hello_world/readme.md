# Introduccion a  Django

## 1.- Instalar Django

```bash
pip install django
```

o desde el archivo `requirements.txt`

```bash
pip install -r requirements.txt
```

## 2.- Crear un projecto mysite

```bash
django-admin startproject mysite
```

## 3.- Ingresar a la carpeta del proyecto

```bash
cd mysite
```

## 4.- Crear aplicacion


```bash
python manage.py startapp core
```

## 5.- Activar la aplicacion en el archivo settings.py

```python
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'core',
]
```

## 6.- Iniciar el servidor de desarrollo

```bash
python manage.py runserver
```