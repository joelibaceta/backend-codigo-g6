const { PeopleModel } = require("../db");

class PeopleController {


    static search(req, res) {

        let query_params = req.query

        let query = PeopleModel.find(query_params)

        query.exec(function(err, people) {
            if (err) {
                res.sendStatus(404)
            } else {
                res.send(people)
            }
        })
        
    }


    static findAll(req, res) {
        // Definimos la consulta al modelo PeopleModel
        let query = PeopleModel.find({})
        // Ejecutamos la consulta
        query.exec(function(err, people) {
            if (err) { // Si hay un error
                res.sendStatus(404)
            } else { // Si la consulta se procesa correctamente
                // Enviamos los resultados de la consulta
                // al cliente
                res.send(people)
            }
        })

    }

    static findById(req, res) {
        let oid = req.params.oid

        PeopleModel.findById(oid)
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.status(404).send({
                message: err.message
            })
        })
    }

    static create(req, res) {
        let data = req.body 

        PeopleModel.create(data)
            .then((data) => {
                res.status(201).send(data)
            })
            .catch((err) => {
                res.status(400).send({
                    message: err.message
                })
            })
    }

    static delete(req, res) {
        let oid = req.params.oid

        PeopleModel.findByIdAndDelete(oid)
        .then(res.send("deleted"))
        .catch(res.status(400).send({
            "message": err.message
        }))

    }

}

module.exports = { PeopleController }