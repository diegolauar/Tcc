const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    establishmentId: {
        type: mongoose.Schema.Types.ObjectId,
    },
    cpf: {
        type: String,
        required: true,
    },
    descriptionPremium: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        default: 0
    },
    value: {
        type: Number,
        required: false,
        default: 0
    },   
    total: {
        type: Number,
        required: false,
        default: 0
    },   
    createdDate: {
        type: Date,
        required: false,
        default: Date.now
    }
});


module.exports = mongoose.model('Redemption', schema)