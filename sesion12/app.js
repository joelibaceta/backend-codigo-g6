const express = require('express')
const bodyParser = require('body-parser')
const dotEnv = require('dotenv')
const cors = require('cors')

dotEnv.config()

const { BookController } = require('./controllers/book_controller')
const { UserController } = require('./controllers/user_controller')
const { CategoryController } = require('./controllers/category_controller')
const { AuthorController } = require('./controllers/author_controller')

const jwtMiddleware = require('./middlewares/jwt')
const onlyAdminMiddleware = require('./middlewares/admin')

let app = express();

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('hello world')
})

app.post('/books', [jwtMiddleware, onlyAdminMiddleware], BookController.create)
app.get('/books', BookController.list)
app.get('/book/:pk', BookController.retrieve)
app.put('/book/:pk', jwtMiddleware, BookController.update)
app.delete('/book/:pk', [jwtMiddleware, onlyAdminMiddleware], BookController.delete)

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

app.get('/author/:pk/books', AuthorController.retrieve_by_author)
app.get('/book/:pk/authors', BookController.retrieve_by_book)
// /category/:categoryId/book/:bookId

// /category/:categoryId/books?year=2005
app.get('/category/:categoryId/books', CategoryController.retrieve_by_category)

app.post('/users', UserController.create)
app.post('/login', UserController.login)


app.listen(8000, () => {
    console.log('Servidor iniciado')
    console.log(process.env.SECRET)
})