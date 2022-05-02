const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class AuthController {

  static login(req, res) {

    let username = req.body.username;
    let password = req.body.password;

    User.findAll({where: {username: username}})
      .then((data) => {
        let user = data[0];
        bcrypt.compare(password, user.password, (err, result) => {
          if (result) {
            let payload = {id: user.id, username: user.username};
            const token = jwt.sign(payload, 'secret', {expiresIn: '1800s'});

            res.status(200).json(token);
          } else {
            res.status(404).send({
              message: 'Wrong password'
            });
          }
        });
      })
      .catch((err) => {
        res.status(404).send({
          message: 'User not found'
        });
      
      });

  }
}

module.exports = { AuthController}