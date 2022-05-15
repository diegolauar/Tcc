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
    value: {
        type: Number,
        required: true,
        default: 0
    },   
    status: {
        type: String,
        required: true,
        enum: ['active', 'inative'],
        default: 'active'
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
        trim: true
    }
});


module.exports = mongoose.model('Premium', schema)