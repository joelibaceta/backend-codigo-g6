class Pet:
  def __init__(self, name):
      self.name = name
  def eat(self):
      return "ñom ñom ñom"

class Dog(Pet):
  def make_noise(self):
      return "Woof!"

class Cat(Pet):
  def make_noise(self):
      return "Meow!"

class Fish(Pet):
  def make_noise(self):
      return "Blub!"

firulais = Dog("Firulais")
print(firulais.name)
pelusa = Cat("Pelusa")
print(pelusa.name)
nemo = Fish("Nemo")
print(nemo.name)

print(firulais.eat())
print(pelusa.eat())
print(nemo.eat())

print(firulais.make_noise())
print(pelusa.make_noise())
print(nemo.make_noise())