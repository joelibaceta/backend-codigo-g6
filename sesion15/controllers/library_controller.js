const { LibraryModel } = require("../db");

class LibraryController {

    static create(req, res) {
        let data = req.body
        LibraryModel.create(data)
            .then((result) => {
                res.send(result)
            })
            .catch((err)=>{
                res.status(404).send({
                    message: err.message
                })
            })
    }

    static list(req, res) {
        LibraryModel.find({})
            .then((results) => {
                res.send(results)
            })
            .catch((err)=>{
                res.sendStatus(404)
            })
    }

}

module.exports = { LibraryController }