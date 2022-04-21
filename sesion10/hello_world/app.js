const express = require('express');
const handler = require('./modulo1');
const middleware = require('./middleware')

let app = express();


app.get('/', function(req, res) {
  res.send('Hello World');
})

// return files from the 'static' folder
app.use(express.static('static'));

// return files from the 'media' folder
app.use('/public', express.static('media'));

// public/img/logo.png
// => media/img/logo.png

// Handle request made to /hello endpoint
app.get('/hello', middleware.custom_middleware, handler.handle_request);

app.get('/hello/:name', handler.handle_request_url_params);

app.get('/secret', middleware.custom_middleware, handler.handle_secret_request);

app.listen(3000, function() {
  console.log('Listening on port 3000...');
});


