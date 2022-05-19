const mongoose = require("mongoose")
const Redemption = mongoose.model('Redemption')

exports.get = async(data) => {
    const res = await Redemption.find({
        establishmentId: data.headers.establishmentid
    });
    return res;
}
exports.getByCpf = async (data) => {    
    const res = await Redemption.find({
        establishmentId: data.headers.establishmentid,
        cpf: data.params.cpf
       })
       return res
}

exports.create = async (data) => {
    var redemption = new Redemption(data.body)
    await redemption.save()
}

// exports.update = async (cpf, data) => {
//     await Redemption.findByIdAndUpdate(cpf, {
//         $set: {
//             name: data.name,
//             password: data.password
//         }
//     })
// }
// 
// exports.delete = async (cpf) => {
//     await Redemption.findOneAndRemove(cpf)
// }