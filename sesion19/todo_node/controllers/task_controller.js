const { Task } = require('../db')

class TaskController {

    static create(req, res) {
        let data = req.body
        Task.create(data)
        return res.status(201).send("OK")
    }

    static list(req, res) {
        Task.list((tasks)=>{
            return res.send(tasks)
        });
        
    }

    static retrieve(req, res) {
        let id = req.params.id;
        Task.retrieve(id, (task)=>{
            return res.send(task)
        })
    }

    static delete(req, res) {
        let id = req.params.id;
        Task.delete(id, ()=> {
            return res.send("deleted")
        })
    }

    static update(req, res) {
        let id = req.params.id;
        let data = req.body;

        Task.update(id, data, (task)=> {
            res.send(task)
        })
    }

}

module.exports = { TaskController }