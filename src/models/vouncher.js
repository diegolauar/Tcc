const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    establishmentId: {
        type: mongoose.Schema.Types.ObjectId,
    },
    idResgate: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    statusVouncher: {
        type: String,
        required: true,
        enum: ['disponivel', 'utilizado'],
        default: 'disponivel'
    },
    createdDate: {
        type: Date,
        required: false,
        default: Date.now
    }
});


module.exports = mongoose.model('Vouncher', schema)