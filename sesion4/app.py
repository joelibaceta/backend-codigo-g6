from flask import Flask, render_template, request

import uuid

app = Flask(__name__)

todos = {}

@app.route('/')
def hello_world():
    
    return render_template('index.html', todos=get_todos())

@app.route('/add_task', methods=['POST'])
def add_task():
    task = request.form['task']
    add_todo(task)

    return render_template('index.html', todos=get_todos())


@app.route('/delete_task/<int:id>')
def delete_task(id):
    delete_todo(id)
    return render_template('index.html', todos=get_todos())

# Create a new todo
def add_todo(todo):
    todos[uuid.uuid4().int] = todo

# Get all todos
def get_todos():
    return todos

# Get a todo by id
def get_todo(id):
    return todos[id]

# Delete a todo by id
def delete_todo(id):
    print(todos)
    del todos[id]

# Update a todo by id
def update_todo(id, todo):
    todos[id] = todo


if __name__ == '__main__':
    app.run(debug=True)