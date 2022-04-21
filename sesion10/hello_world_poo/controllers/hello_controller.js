
class HelloController {

  static sayHello(req, res) {
    res.send('Hello World');
  }

}

module.exports = { HelloController }