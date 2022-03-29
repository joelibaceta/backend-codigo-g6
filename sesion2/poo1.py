class Empleado:

  def __init__(self, nombre, apellido, salario):
    self.nombre = nombre
    self.apellido = apellido
    self.salario = salario

juanito = Empleado("Juan", "Perez", 1000)
maria = Empleado("Maria", "Gomez", 2000)

print("Nombre:", juanito.nombre)
print("Apellido:", juanito.apellido)
print("Salario:", juanito.salario)

