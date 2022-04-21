exports.custom_middleware = function(req, res, next) {

  let path = req.originalUrl;

  console.log(path)

  if (path == '/secret') {
    res.status(403).send('Forbidden');
  }

  let method = req.method;
  console.log('Request received: ' + method + ' ' + path);

  req.logged = true;

  next();
}