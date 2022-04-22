const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
   const headerAuth = req.headers['authorization'];

   if (headerAuth == null) return res.status(401).send('No token provided');

   const token = headerAuth.split(' ')[1];

   jwt.verify(token, 'secret', (err, decoded) => {
      if (err) return res.status(401).send('Unauthorized');

      req.userId = decoded.id;
      next();
   })
}

module.exports = verifyToken