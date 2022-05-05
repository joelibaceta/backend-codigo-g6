const mongoose = require('mongoose')

const SchemaTypes  = mongoose.Schema.Types

mongoose.connect('mongodb://localhost:27017/People', {useNewUrlParser: true})

var PeopleSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    }, 
    apellido: {
        type: String,
        required: true
    },
    direccion: {
        type: Object,
        required: false
    }
})

var PeopleModel = mongoose.model('people_collection', PeopleSchema)

module.exports = { PeopleModel }
