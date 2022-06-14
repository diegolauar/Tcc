const req = require("express/lib/request");
const mongoose = require("mongoose")
const Vouncher = mongoose.model('Vouncher')

exports.get = async (data) => {
    const res = await Vouncher.find({
        establishmentId: data.headers.establishmentid,
        cpf: data.body.cpf
    });
    return res;
}

exports.getAll = async (data) => {
    const res = await Vouncher.find({
        establishmentId: data.headers.establishmentid
    });
    return res;
}

exports.getById = async (data) => {
    const res = await Vouncher.findById(data.body._id);
    return res;
}

exports.create = async (data) => {
    var vouncher = new Vouncher({
        establishmentId: data.body.establishmentId,
        idResgate: data.body.idResgate,
        cpf: data.body.cpf,
        name: data.body.name
    })
    await vouncher.save()
}

exports.update = async (id, data) => {
    await Vouncher.findByIdAndUpdate(id, {
        $set: {
            statusVouncher: data.statusVouncher
        }
    })
}

exports.delete = async (cpf) => {
    await Vouncher.findOneAndRemove(cpf)
}