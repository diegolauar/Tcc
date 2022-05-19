const req = require("express/lib/request");
const mongoose = require("mongoose")
const Vouncher = mongoose.model('Vouncher')

exports.get = async(data) => {
    const res = await Vouncher.find({
        establishmentId: data.headers.establishmentid,
        cpf: data.body.cpf
    });
    return res;    
}

exports.getById = async(data) => {
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

// exports.update = async (cpf, data) => {
//     await Vouncher.findByIdAndUpdate(cpf, {
//         $set: {
//             name: data.name,
//             password: data.password
//         }
//     })
// }
// 
// exports.delete = async (cpf) => {
//     await Vouncher.findOneAndRemove(cpf)
// }