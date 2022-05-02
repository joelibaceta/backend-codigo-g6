
const { Category, Book } = require('../models')

class CategoryController {

    static create(req, res) {
        let data = req.body

        Category.create(data)
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
        Category.findAll()
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

        Category.findByPk(pk)
            .then((result) => {
                res.status(200).send(result)
            })
            .catch((err) => {
                res.status(404).send({
                    message: err.message
                })
            })
    }

    static retrieve_by_category(req, res) {
        let categoryId = req.params.categoryId

        Book.findAll({
            where: {categoryId: categoryId}
        })
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

        Category.update(data, {
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

        Category.destroy({
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

module.exports = { CategoryController }