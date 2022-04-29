const jwt = require('jsonwebtoken')

function verifyToken(req, res, next) {
    const headerAuth = req.headers['authorization']
    if (headerAuth == null) {
        res.status(401).send("Token required")
    }

    // Token 8daf3dff...
    let token = headerAuth.split(' ')[1]

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) {
            res.status(401).send("Invalid Token")
        } 

        req.userId = decoded.id
        req.username = decoded.username

        next()
    })
     
}

module.exports = verifyToken