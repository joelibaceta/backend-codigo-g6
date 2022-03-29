#   *
#  *** 
# *****
#*******

from tkinter import E


def triangulo(n):
  try:
    for i in range(0, n):
      print("*" * (i + 1))
  except TypeError as e:
    print("Se esperaba un entero, pero se recibio: ", type(n))
  except Exception as e:
    print("Error: ", e)

def tree(n):
  for i in range(0,n):
    print(" " * (n - i - 1) +  "*" * (2 * i + 1))


triangulo(float("3"))