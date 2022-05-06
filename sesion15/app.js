const express = require('express');
const bodyParser = require('body-parser')
const dotenv = require('dotenv')

dotenv.config()

const {BookController} = require('./controllers/book_controller')
const {LibraryController} = require('./controllers/library_controller')

const app = express();

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.post('/books', BookController.create)
app.get('/books', BookController.findAll)
app.get('/books/search', BookController.search)

app.post('/libraries', LibraryController.create)
app.get('/libraries', LibraryController.list)



app.listen(3000, () => {
    console.log('Server running')
})