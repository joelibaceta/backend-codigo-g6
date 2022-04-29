
const { Book } = require('../models')

class BookController {

    static create(req, res) {
        let data = req.body

        Book.create(data)
            .then((result) => {
                res.send(result)
            })
            .catch((err) => {
                res.status(400).send({
                    message: err.message
                })
            })
    }

    static list(_req, res) {
        Book.findAll()
            .then((result) => {
                res.status(200).send(result)
            })
            .catch((err) => {
                res.status(404).send({
                    message: err.message
                })
            })
    }

    static retrieve(req, res) {
        let pk = req.params.pk

        Book.findByPk(pk)
            .then((result) => {
                res.status(200).send(result)
            })
            .catch((err) => {
                res.status(404).send({
                    message: err.message
                })
            })
    }

    static update(req, res) {

        let pk = req.params.pk
        let data = req.body

        Book.update(data, {
            where: {id: pk}
        })
        .then((result) => {
            res.status(200).send(result)
        })
        .catch((err) => {
            res.status(400).send({
                message: err.message
            })
        })

    }

    static delete(req, res) {
        let pk = req.params.pk

        Book.destroy({
            where: {
                id: pk
            }
        })
        .then((result) => {
            res.status(200).send(result)
        })
        .catch((err) => {
            res.status(400).send({
                message: err.message
            })
        })
    }

}

module.exports = { BookController }