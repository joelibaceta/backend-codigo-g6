from task import Task

class TodoList:
  """Clase que gestiona las tareas"""

  def __init__(self):
    self.tasks = {} # lista_de_tareas es un dict

  def add_task(self, task: Task):
    """Agregar la tarea a la lista de tareas"""
    self.tasks[task.id] = task
  
  def get_task(self, id):
    """Retornar la tarea con el id especificado"""
    return self.tasks[id]
  
  def get_tasks(self):
    """Retornar la lista de tareas"""
    return self.tasks
  
  def delete_task(self, id):
    """Eliminar la tarea con el id especificado"""
    del self.tasks[id]

  def update_task(self, id, task):
    """
    Actualizar la tarea con el id especificado reemplazando 
    la tarea por la nueva instancia recibida
    """ 
    self.tasks[id] = task