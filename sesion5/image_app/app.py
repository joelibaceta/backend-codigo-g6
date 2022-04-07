
from flask import Flask, request, send_file, render_template
from PIL import Image

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/galeria/gato')
def galeria_gato():
    return render_template('galeria.html')

# /assets/gato.jpg?w=200&h=200
@app.route('/assets/gato.jpg')
def gato():
  width = int(request.args.get('w', 200))
  height = int(request.args.get('h', 200))
  image = Image.open('assets/gato.jpeg')
  image.resize((width, height)).save(f"assets/gato_resized_{width}_{height}.jpg")
  return send_file(f"assets/gato_resized_{width}_{height}.jpg", mimetype='image/jpg')