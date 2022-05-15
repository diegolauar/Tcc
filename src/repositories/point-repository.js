const mongoose = require("mongoose")
const Point = mongoose.model('Point')

exports.get = async () => {
    const res = await Customer.find()
    return res
}

exports.create = async (data) => {
    var point = new Point(data)
    await point.save()

}

exports.update = async (cpf, data) => {
    await Point.findByIdAndUpdate(cpf, {
        $set: {
            name: data.name,
            password: data.password
        }
    })
}

exports.delete = async (cpf) => {
    await Point.findOneAndRemove(cpf)
}