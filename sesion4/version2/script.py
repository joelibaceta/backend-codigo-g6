from task import Task
from todo_list import TodoList

lista_de_tareas = TodoList()

lista_de_tareas.add_task(Task("Hacer la compra"))

lista_de_tareas.add_task(Task("Hacer la cama"))

tareas_agregadas = lista_de_tareas.get_tasks()

for uuid in tareas_agregadas:
  print("Tarea:" + tareas_agregadas.get(uuid).name)