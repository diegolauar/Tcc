const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,      
    },
    cpf: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('Costumer', schema)