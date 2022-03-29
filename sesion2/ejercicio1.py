class Vehicle:
  def __init__(self, model, color):
    self.model = model
    self.color = color
    self.wheels = 4
    self.doors = 4
    self.seats = 4

class Motorbike(Vehicle):
  def __init__(self, model, color):
    super().__init__(model, color)
    self.wheels = 2
    self.doors = 0
    self.seats = 2

class Truck(Vehicle):
  pass

class Car(Vehicle):
  pass

class SportCart(Car):
  def __init__(self, model, color):
    super().__init__(model, color)
    self.doors = 2
    self.seats = 2
  
  def active_super_velocity(self):
    print("Active super velocity")

class F1(SportCart):
  def __init__(self, model, color):
    super().__init__(model, color)
    self.doors = 0
    self.seats = 1

mif1 = F1("F1", "Red")
print(mif1.wheels)
print(mif1.doors)
print(mif1.seats)


