const firebase  = require("firebase-admin")
const { v4 } = require('uuid')

var serviceAccount = require("./fir-firestore-3ff16-firebase-adminsdk-yppl2-62b7189635.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount)
});

const db = firebase.firestore();

class Task {
    static create(data) {
        let taskCol = db.collection('tasks');
        let taskDoc = taskCol.doc(v4())
        taskDoc.set(data)
    }

    static list(callback) {
        let taskCol = db.collection('tasks');
        let tasks = [];

        taskCol.get()
            .then(snapshot => {
                snapshot.forEach((doc) => {
                    let item = doc.data();
                    item["id"] = doc.id
                    tasks.push(item)
                })
                callback(tasks)
            });
        
        
    }

    static retrieve(id, callback) {
        let taskCol = db.collection('tasks')
        let task = taskCol.doc(id)

        task.get().then(doc => {
            let data = doc.data();
            callback(data);
        })
    }

    static update(id, data, callback) {
        let taskCol = db.collection('tasks')
        let task = taskCol.doc(id)

        task.update(data).then(()=>{
            task.get().then(doc => {
                let data = doc.data()
                callback(data)
            })
        })
    }

    static delete(id, callback) {
        let taskCol = db.collection('tasks')
        let task = taskCol.doc(id)

        task.delete().then(()=>{
            callback()
        })
    }
}

module.exports = { Task }