from triangulo import tree
from palindromo import is_palindrome2

n = int(input("Ingrese un numero: "))
tree(n)

texto = input("Ingrese un texto: ")
is_palindrome = is_palindrome2(texto)

if is_palindrome:
  print("Es palindromo")
