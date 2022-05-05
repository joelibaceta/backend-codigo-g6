const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

const {PeopleController} = require('./controllers/people_controller')

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/people', PeopleController.findAll)
app.get('/person/:oid', PeopleController.findById)
app.post('/people', PeopleController.create)
app.delete('/person/:oid', PeopleController.delete)

app.get('/people/search', PeopleController.search)

app.listen(3000, () => {
    console.log("Server running...")
})