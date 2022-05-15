const mongoose = require("mongoose")
const Costumer = mongoose.model('Costumer')

exports.get = async () => {
    const res = await Costumer.find({ 
        active: true 
    },'name email cpf roles')
    return res
}

exports.getByCpf = async (cpf) => {
    const res = await Costumer.findOne({
         cpf: cpf,
         active: true
        },'name email cpf roles')
        return res
}

exports.create = async (data) => {
    var costumer = new Costumer(data)
    await costumer.save()

}

exports.update = async (cpf, data) => {
    await Costumer.findOneAndUpdate(cpf, {
        $set: {
            name: data.name,
            password: data.password
        }
    })

}

exports.delete = async (cpf) => {
    await Costumer.findOneAndRemove(cpf)
}