
const express = require('express');
const { HelloController } = require('./controllers/hello_controller');

let app = express();

app.get('/',  HelloController.sayHello)