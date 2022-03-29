import math

class CalculoDificil:
  def calcular(self, n1, n2, n3):
    return (n1 + n2 + n3) / math.sqrt(n1)

class CalculoDificilVariante1(CalculoDificil):
  def calcular(self, n1, n2, n3):
    resultado_calculo_padre = super().calcular(n1, n2, n3)
    return abs(resultado_calculo_padre)

calculador = CalculoDificilVariante1()
print(calculador.calcular(1, 2, 3))