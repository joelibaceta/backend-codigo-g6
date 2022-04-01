
from flask import Flask, render_template, request, redirect, send_file
from todo_list import TodoList
from task import Task

app = Flask(__name__)

todolist = TodoList()

@app.route('/')
def index():
  tasks = todolist.get_tasks()
  return render_template('index.html', tasks=tasks)
 
@app.route('/tasks', methods=['POST', 'GET'])
def add_task():
  # Verificar si se está recibiendo una petición POST
  if request.method == 'POST':
    # Obtener el valor de la nueva tarea desde el formulario
    task_name = request.form['new_task']
    # Crear una nueva tarea
    new_task = Task(task_name)
    # Agregar la nueva tarea a la lista de tareas
    todolist.add_task(new_task)
  # Redireccionar a la ruta principal
  return redirect("/")

@app.route("/task/<id>/delete", methods=['GET'])
def delete_task(id):
  # Eliminar la tarea de la lista de tareas con el id especificado
  todolist.delete_task(id)
  # Redireccionar a la ruta principal
  return redirect("/")

@app.route("/task/<id>/done", methods=['PUT'])
def update_task(id):
  # Buscar la tarea con el id especificado
  task = todolist.get_task(id)
  # Cambiar el estado de la tarea
  task.done = True
  # Actualizar la tarea en la lista de tareas
  todolist.update_task(id, task)
  # Retornar una respuesta HTTP positiva
  return "OK", 200


@app.route("/assets/<path:path>.<ext>")
def style(path, ext):
  if ext in ['css', 'js', 'png', 'jpg', 'gif', 'svg']:
    return send_file('assets/' + path)
  else:
    return "Not found", 404


if __name__ == '__main__':
  app.run(debug=True)