const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    establishmentId: {
        type: mongoose.Schema.Types.ObjectId,
    },
    cpf: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true,
        default: 0
    },   
    createdDate: {
        type: Date,
        required: false,
        default: Date.now
    },
    description: {
        type: String,
        required: true
    },
});


module.exports = mongoose.model('Point', schema)