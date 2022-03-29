numeros = [10, 20, 15]

def mayornumero(numeros):
    numero_mayor = 0
    for numero in numeros:
        if numero > numero_mayor:
            numero_mayor = numero
    return numero_mayor

