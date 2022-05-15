const mongoose = require("mongoose")
const Point = mongoose.model('Point')

exports.get = async(data) => {
    const res = await Point.find({establishmentId: data.headers.establishmentid});
    return res;
}

exports.create = async (data) => {
    data.body['establishmentId'] = data.headers.establishmentid
    var point = new Point(data.body)
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