const mongoose = require("mongoose")
const Establishment = mongoose.model('Establishment')


exports.getEstablishments = async () => {
    const res = await Establishment.find()
    return res
}
exports.getById = async (id) => {
    const res = await Establishment.findById(id)
        return res
}

exports.create = async (data) => {
    var establishment = new Establishment(data)
    await establishment.save()

}

exports.update = async (id, data) => {
    await Establishment.findByIdAndUpdate(id, {
        $set: {
            name: data.name            
        }
    })

}

exports.delete = async (id) => {
    await Establishment.findOneAndRemove(id)
}