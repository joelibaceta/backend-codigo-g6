const jwt = require('jsonwebtoken')

function validateToken(req, res, next) {
    const headerAuth = req.headers['authorization']

    if (headerAuth == null) return res.sendStatus(401)

    const token = headerAuth.split(' ')[1]

    jwt.verify(token, process.env.JWTSECRET, (err, user) => {
 
        if (err) return res.sendStatus(401)

        req.user_id = user.id
        req.username = user.username

        next()

    })
}

module.exports = validateToken