const express = require('express');
const bodyParser = require('body-parser')
const dotenv = require('dotenv')

dotenv.config()

const {BookController} = require('./controllers/book_controller')
const {LibraryController} = require('./controllers/library_controller')
const {UserController} = require('./controllers/user_controller')
const {AuthController} = require('./controllers/auth_controller')

const jwt_middleware = require('./middlewares/jwt_middleware')

const app = express();

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.post('/books', jwt_middleware, BookController.create)
app.get('/books', BookController.findAll)
app.get('/books/search', BookController.search)

app.post('/libraries', jwt_middleware, LibraryController.create)
app.get('/libraries', LibraryController.list)

app.post('/signup', UserController.create)
app.post('/login', AuthController.login)


app.listen(3000, () => {
    console.log('Server running')
})