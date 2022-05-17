const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    establishmentId: {
        type: mongoose.Schema.Types.ObjectId,
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,  
        required: true    
    },
    password: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
        required: false,
        default: 0
    },   
    cellphone: {
        type: String,
        required: false
    },
    createdDate: {
        type: Date,
        required: false,
        default: Date.now
    },    
});


module.exports = mongoose.model('Customer', schema)