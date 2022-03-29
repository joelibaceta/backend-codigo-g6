class Auto:
  def __init__(self, modelo, fabricante):
    self.modelo = modelo
    self.fabricante = fabricante
    self.asientos = [Asiento(), Asiento(), Asiento(), Asiento()]

class Asiento():
  def __init__(self):
    self.material = "Lona"
  
  def reclinarse(self):
    print("Asiento reclinado")

miauto = Auto("Yaris", "Toyota")
print(miauto.modelo)
print(miauto.asientos[0].material)

miauto.asientos[0].material = "Cuero"
print(miauto.asientos[0].material)
print(miauto.asientos[1].material)





