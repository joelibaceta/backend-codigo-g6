def complemento(rna):
  str_complemento = ""
  pares = {'A':'T', 'T':'A', 'C':'G', 'G':'C'}
  for n in rna:
    str_complemento = str_complemento + pares[n]
  return str_complemento

def complemento_functional(rna):
  pares = {'A':'T', 'T':'A', 'C':'G', 'G':'C'}
  rna.map(lambda x: pares[x])

print(complemento("ATCCCTAGT"))