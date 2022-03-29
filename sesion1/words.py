words = "lorem impsum dolor sit amet dolor sit amet"

counter = {}

words = words.split(" ")

for word in words:
  if word in counter:
    counter[word] += 1
  else:
    counter[word] = 1

print(counter)