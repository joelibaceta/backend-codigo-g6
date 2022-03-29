class Vehiculo():
    def __init__(self, color, ruedas):
        self.color = color
        self.ruedas = ruedas
    
    def acelerar(self):
      print("Acelerando... maximo a 120 km/h")

    def __str__(self):
        return "Color: {}, Ruedas: {}".format(self.color, self.ruedas)

class Ferrari(Vehiculo):
    def acelerar(self):
      print("Acelerando... maximo a 250 km/h")

class Camioneta(Vehiculo):
    def acelerar(self):
      print("Acelerando... maximo a 80 km/h")

class Moto(Vehiculo):
  pass

miferrari = Ferrari("Rojo", 4)
micamioneta = Camioneta("Azul", 4)
mimoto = Moto("Verde", 2)

miferrari.acelerar()
micamioneta.acelerar()
mimoto.acelerar()