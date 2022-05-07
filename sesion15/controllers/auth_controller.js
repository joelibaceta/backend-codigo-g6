const jwt = require('jsonwebtoken')
const { UserModel } = require("../db")

class AuthController {

    static login(req, res) {
        let username = req.body.username
        let password = req.body.password

        UserModel.authenticate(username, password, (err, user) => {
            if (err) {
                res.status(401).send({
                    message: err.message
                })
            } else {
                let payload = {
                    id: user._id,
                    username: user.username
                }
                let secret = process.env.JWTSECRET
                let token = jwt.sign(payload, secret, {expiresIn: '1800s'})
                res.send({
                    token: token
                })
            }
        })
    }

}

module.exports = {AuthController}