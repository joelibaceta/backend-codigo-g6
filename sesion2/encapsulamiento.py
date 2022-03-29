class Empleado:
  def __init__(self, nombre, apellido):
    self.nombre = nombre
    self.apellido = apellido
    self.__salario = 1000
    
  def pagar_salario(self):
    print("Pagando salario: " + str(self.__salario))

juanito = Empleado("Juan", "Perez")
print(juanito._Empleado__salario)
juanito.pagar_salario()

print(juanito.__dict__)