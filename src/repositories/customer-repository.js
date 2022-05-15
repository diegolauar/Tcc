const mongoose = require("mongoose")
const Customer = mongoose.model('Customer')

exports.get = async() => {
    const res = await Customer.find();
    return res;
}

exports.getEstablishmentId = async(data) => {
    const res = await Customer.find({establishmentId: data.headers.establishmentid});
    return res;
}

exports.getByCpf = async (data) => {
    const res = await Customer.find({
         establishmentId: data.headers.establishmentid,
         cpf: data.params.cpf
        },'name email password cpf balance roles')
        return res
}

exports.create = async (data) => {
    data.body['establishmentId'] = data.headers.establishmentid
    var customer = new Customer(data.body)
    await customer.save()

}

exports.update = async (data) => {
    const res = await Customer.findOneAndUpdate([{cpf: data.params.cpf}, 
        {establishmentId: data.headers.establishmentid}], {
        $set: {
            balance: data.body.value
        }
    })
    return res

}

exports.delete = async (data) => {
    await Customer.findOneAndRemove({cpf: data.params.cpf}, 
        {establishmentId: data.headers.establishmentid})
}