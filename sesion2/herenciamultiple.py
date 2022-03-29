class Avion:
    def __init__(self, modelo, fabricante, año):
        self.modelo = modelo
        self.fabricante = fabricante
        # Evitar caracteres especiales en el codigo
        self.año = año

    def despegar(self):
        print("El avión está despegando")

    def aterrizar(self):
        print("El avión está aterrizando")

class Auto:
    def __init__(self, modelo, fabricante, año):
        self.modelo = modelo
        self.fabricante = fabricante
        self.año = año

    def arrancar(self):
        print("El auto está arrancando")
    
    def frenar(self):
        print("El auto está frenando")

class AutoVolador(Auto, Avion):
  pass

miautovolador = AutoVolador("Aerostar", "Airbus", "2000")
miautovolador.arrancar()
miautovolador.despegar()
miautovolador.aterrizar()
miautovolador.frenar()