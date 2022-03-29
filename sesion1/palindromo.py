def is_palindrome(cadena):
  cadena_invertida = ""
  for char in cadena:
    cadena_invertida = char + cadena_invertida
  
  print(cadena == cadena_invertida) 

def is_palindrome2(cadena):
  return cadena == cadena[::-1]

