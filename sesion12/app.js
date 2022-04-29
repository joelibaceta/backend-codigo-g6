const express = require('express')
const bodyParser = require('body-parser')
const dotEnv = require('dotenv')

dotEnv.config()

const { BookController } = require('./controllers/book_controller')
const { UserController } = require('./controllers/user_controller')
const { CategoryController } = require('./controllers/category_controller')
const { AuthorController } = require('./controllers/author_controller')

const jwtMiddleware = require('./middlewares/jwt')

let app = express();

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('hello world')
})

app.post('/books', jwtMiddleware, BookController.create)
app.get('/books', BookController.list)
app.get('/book/:pk', BookController.retrieve)
app.put('/book/:pk', jwtMiddleware, BookController.update)
app.delete('/book/:pk', jwtMiddleware, BookController.delete)

app.post('/categories', jwtMiddleware, CategoryController.create)
app.get('/categories', CategoryController.list)
app.get('/category/:pk', CategoryController.retrieve)
app.put('/category/:pk', jwtMiddleware, CategoryController.update)
app.delete('/category/:pk', jwtMiddleware, CategoryController.delete)

app.post('/authors', jwtMiddleware, AuthorController.create)
app.get('/authors', AuthorController.list)
app.get('/author/:pk', AuthorController.retrieve)
app.put('/author/:pk', jwtMiddleware, AuthorController.update)
app.delete('/author/:pk', jwtMiddleware, AuthorController.delete)

// /category/:categoryId/book/:bookId

// /category/:categoryId/books?year=2005
app.get('/category/:categoryId/books', CategoryController.retrieve_by_category)

app.post('/users', jwtMiddleware, UserController.create)
app.post('/login', UserController.login)


app.listen(3000, () => {
    console.log('Servidor iniciado')
    console.log(process.env.SECRET)
})