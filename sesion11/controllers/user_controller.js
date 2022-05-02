const bcrypt = require('bcrypt');
const {User} = require('../models');

class UserController {

  static list(req, res) {
    User.findAll()
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(400).send({
          message: err.message
        })
      });
  }

  static signUpSync(req, res) {
    let payload = req.body;

    const salt = bcrypt.genSaltSync(10);
    let newPassword = bcrypt.hashSync(payload.password, salt);

    payload.password = newPassword;

    User.create(payload)
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(404).send({
          message: err.message
        })
      });
  }

  static signUpAsync(req, res) {
    let payload = req.body;

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(payload.password, salt, (err, newPassword) => {

        payload.password = newPassword;

        User.create(payload)
          .then((data) => {
            res.status(200).send(data);
          })
          .catch((err) => {
            res.status(404).send({
              message: err.message
            })
          });
      });
    });
  }

}


module.exports = {UserController};