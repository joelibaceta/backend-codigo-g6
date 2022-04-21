exports.handle_request = function(req, res) {

  console.log(req.logged);

  // Get the name from the request query string
  var name = req.query.name;

  // If the name is not provided, use 'Anonymous'
  if (name == undefined) {
    name = 'Anonymous';
  }

  res.send('Hello ' + name);
}

exports.handle_request_url_params = function(req, res) {
  res.send('Hello ' + req.params.name);
}

exports.handle_secret_request = function(req, res) {
  res.send('This is a secret page!');
}