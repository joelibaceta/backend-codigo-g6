from flask import Flask
from flask import request
from flask import render_template

app = Flask(__name__)

# Ruta principal
@app.route('/')
def index():
  return '<h1>Hola mundo</h1>'

# GET /hola?name=juan
@app.route('/hola')
def hola():
  name = request.args.get('name')
  if name == None:
    name = 'Anonimo'
  return 'Hola ' + name # Hola juan

# Renderizar un template html a partir del archivo index.html
# Reemplaza el valor de {{name}} por el valor de name
@app.route('/template')
def template():
  name = request.args.get('name')
  return render_template('index.html', name=name)

@app.route('/bye')
def bye():
  return 'Adios!'