
function onlyAdmin(req, res, next) {
   
    if ( req.role == "admin" ) {
        next()
    } else {
        res.status(401).send("No autorizado")
    }
     
}

module.exports = onlyAdmin