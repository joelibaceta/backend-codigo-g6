const express = require('express');
const bodyParser = require('body-parser');

const { ProductController } = require('./controllers/product_controller');
const { CategoryController } = require('./controllers/category_controller');
const { UserController } = require('./controllers/user_controller');
const { AuthController } = require('./controllers/auth_controller');

const authMiddleware = require('./middlewares/auth_middleware');

let app = express();

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hola mundo');
});

app.post('/products', authMiddleware, ProductController.create);
app.get('/products', ProductController.list);

app.get('/product/:id', ProductController.getById);
app.put('/product/:id', authMiddleware, ProductController.update);
app.delete('/product/:id', authMiddleware, ProductController.delete);

app.post('/categories', CategoryController.create);
app.get('/categories', CategoryController.list);

app.get('/category/:id', CategoryController.getById);
app.put('/category/:id', CategoryController.update);
app.delete('/category/:id', CategoryController.delete);

app.post('/sign_up', UserController.signUpAsync)
app.get('/users', UserController.list)
app.post('/login', AuthController.login)

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});