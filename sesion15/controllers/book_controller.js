const { BookModel } = require("../db")

class BookController {

    static search(req, res) {
        let query = req.body

        console.log(query)

        BookModel.find(query, {title: 1, authors: 1})
            .then((results) => {
                res.send(results)
            })
            .catch((err) => {
                res.status(404).send({
                    message: err.message
                })
            })
    }

    static findAll(req, res) {
        BookModel.find({})
            .populate('library')
            .then((results) => {
                res.send(results)
            })
            .catch((err) => {
                res.status(404).send({
                    message: err.message
                })
            })
    }

    static create(req, res) {
        let data = req.body

        BookModel.create(data).then((result) => {
            res.send(result)
        }).catch((err) => {
            res.status(400).send({
                message: err.message
            })
        })
    }

}

module.exports = {BookController}