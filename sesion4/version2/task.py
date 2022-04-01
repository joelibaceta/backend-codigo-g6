import uuid

class Task:
  """Clase que representa una tarea"""

  def __init__(self, name):
    self.id = str(uuid.uuid4().hex) # Generar un identificador único
    self.name = name
    self.done = False

  def __str__(self):
    # Retornar una representación en cadena de la tarea
    return self.name