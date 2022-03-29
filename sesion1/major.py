numeros = []

for i in range(3):
  numeros.append(int(input("Ingrese un numero")))

numero_mayor = 0

for numero in numeros:
  if numero > numero_mayor:
    numero_mayor = numero

print("El numero mayor es: ", numero_mayor)


  

