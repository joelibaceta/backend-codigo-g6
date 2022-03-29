
class Empleado:

  def __init__(self, nombre, apellido):
    self.nombre = nombre
    self.apellido = apellido
    self.ventas = 0

  def vender(self, cantidad):
    self.ventas += cantidad


juanito = Empleado("Juan", "Perez")
maria = Empleado("Maria", "Gomez")

print(maria.ventas)
maria.vender(500)
print(maria.ventas)



