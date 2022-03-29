lorem = "lorem impsum dolor sit amet dolor sit amet"

counter = {}

for i in lorem:
  if i in counter:
    counter[i] += 1
  else:
    counter[i] = 1
  
print(counter)