
vehicles = []
continuar = True

def agregar_vehiculo(parametros):
  vehicles.append(parametros)

def mostrar_vehiculos():
  for vehiculo in vehicles:
    print(vehiculo)

while(continuar):
  print("1. Agregar vehiculo")
  print("2. Mostrar vehiculos")
  print("3. Salir")
  opcion = input("Ingrese una opcion: ")
  if opcion == "1":
    model = input("Ingrese el modelo: ")
    color = input("Ingrese el color: ")
    agregar_vehiculo({
      "model": model,
      "color": color
    })
  elif opcion == "2":
    mostrar_vehiculos()
  elif opcion == "3":
    continuar = False
  else:
    print("Opcion invalida")

