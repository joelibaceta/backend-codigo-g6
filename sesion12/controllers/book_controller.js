
const { Book, Author, Category } = require('../models')

class BookController {

    static create(req, res) {
        let data = req.body

        let authors = req.body.authors

        Book.create(data)
            .then((result) => {

                let authorPromises = []

                for(let i in authors) {
                    let author = authors[i]

                    authorPromises.push(
                        Author.findOrCreate({where: {
                            firstName: author.firstName,
                            lastName: author.lastName
                        }})
                    )
                }

                Promise.all(authorPromises).then((authors) => {
                    result.setAuthors(authors.map((author) => author[0]))
                })

                res.send(result)

            })
            .catch((err) => {
                res.status(400).send({
                    message: err.message
                })
            })

    }

    static list(_req, res) {
        Book.findAll({
            include: [
                {
                    model: Author,
                    as: 'authors',
                    attributes: ['firstName', 'lastName'],
                    through: {
                        attributes: [],
                    }
                },
                {
                    model: Category,
                    as: 'category',
                    attributes: ['name']
                }
            ]
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

    static retrieve_by_book(req, res) {
        let pk = req.params.pk

        Book.findByPk(pk, {
            include: [
                {
                    model: Author,
                    as: 'authors',
                    attributes: ['id', 'firstName', 'lastName'],
                    through: {
                        attributes: [],
                    }
                }
            ]
        }).then((book) => {
            res.status(200).send(book.authors)
        }).catch((err) => {
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