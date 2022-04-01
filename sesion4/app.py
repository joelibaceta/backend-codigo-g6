from flask import Flask, render_template, request

app = Flask(__name__)

todos = {}

@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/add_task', methods=['POST'])
def add_task():
    task = request.form['task']
    add_todo({
        'id': len(todos),
        'task': task,
    })
    return render_template('index.html', todos=get_todos())

# Create a new todo
def add_todo(todo):
    todos[todo["id"]] = todo["task"]

# Get all todos
def get_todos():
    return todos

# Get a todo by id
def get_todo(id):
    return todos[id]

# Delete a todo by id
def delete_todo(id):
    del todos[id]

# Update a todo by id
def update_todo(id, todo):
    todos[id] = todo


if __name__ == '__main__':
    app.run(debug=True)