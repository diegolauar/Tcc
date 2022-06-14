const mongoose = require("mongoose")
const Premium = mongoose.model('Premium')


exports.getEstablishmentId = async(data) => {
    const res = await Premium.find({establishmentId: data.headers.establishmentid});
    return res;
}


exports.create = async (data) => {
    data.body['establishmentId'] = data.headers.establishmentid
    var premium = new Premium(data.body)
    await premium.save()    
}

exports.update = async (data) => {
    const res = await Premium.findOneAndUpdate([
        {id: data.body._id},
        {establishmentId: data.headers.establishmentid}], {
        $set: {
            name: data.body.name,
            value: data.body.value
        }
    })
    return res

}

exports.delete = async (data) => {
    await Premium.findOneAndRemove({id: data.body.id}, 
        {establishmentId: data.headers.establishmentid})
}