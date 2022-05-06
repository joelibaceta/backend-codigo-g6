const mongoose = require('mongoose')

//mongodb+srv://root:<password>@cluster0.g49fi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

//mongoose.connect('mongodb://localhost:27017/Books', {useNewUrlParser: true})
mongoose.connect('mongodb+srv://root:' + process.env.MONGODBPASS + '@cluster0.g49fi.mongodb.net/Books')

const SchemaTypes = mongoose.Schema.Types

let currentYear = new Date().getFullYear();

var LibrarySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    }
})

var BookSchema = mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    price: {
        type: Number,
        validate: {
            validator: function(v) {
                return /.+0$/.test(v)
            },
            message: props => `${props.value} no es un precio valido`
        }
    },
    year: {
        type: Number,
        max: [currentYear, "Error, ingrese una fecha valida"]
    },
    authors: {
        type: Array
    },
    status: {
        type: String,
        enum: ['Available', 'Unavailable']
    },
    library: {
        type: SchemaTypes.ObjectId,
        ref: 'library'
    }
})

var BookModel = mongoose.model('book', BookSchema)

var LibraryModel = mongoose.model('library', LibrarySchema)

module.exports = { BookModel, LibraryModel }