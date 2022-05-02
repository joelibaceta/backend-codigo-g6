const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User } =require('../models')


class UserController {

    static login(req, res) {
        // %%
        let username = req.body.username
        let password = req.body.password

        User.findAll({
            where: {username: username}
        }).then((users) => {
            let user = users[0]

            bcrypt.compare(password, user.password, (err, result) => {
                if (result) {
                    let payload = {
                        id: user.id,
                        username: user.username,
                        role: user.role
                    }
                    const token = jwt.sign(payload, process.env.SECRET, {expiresIn: '1800s'})
                    res.status(200).send({
                        token: token,
                        role: user.role,
                        username: user.username
                    })
                } else {
                    res.status(401).send("Ups, something wrong, try again")
                }
            })
        }).catch((err) => {
            res.status(401).send("Ups, something wrong, try again")
        })
    }

    static create(req, res) {
        let data = req.body

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(data.password, salt, (err, newPassword) => {
                data.password = newPassword

                User.create(data)
                .then((result) => {
                    res.status(201).send(result)
                })
                .catch((err) => {
                    res.status(400).send({
                        message: err.message
                    })
                })

            })
        })


    }

}

module.exports = {UserController}