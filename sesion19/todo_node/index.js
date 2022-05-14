const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const { TaskController } = require('./controllers/task_controller')

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("Hello world");
})

app.use(express.static(path.join(__dirname, 'views')))

app.post('/tasks', TaskController.create)
app.get('/tasks', TaskController.list)
app.get('/task/:id', TaskController.retrieve)
app.delete('/task/:id', TaskController.delete)
app.put('/task/:id', TaskController.update)

app.listen(3000, () => {
    console.log("Server running ...");
})