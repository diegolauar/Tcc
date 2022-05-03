const mongoose = require("mongoose")
const Costumer = mongoose.model('Costumer')

exports.get = (req, res, next) =>{
    Costumer.find({ active: true }, 'name email password cpf roles').then( data => {
        res.status(200).send(data)
    }).catch(e =>{
        res.status(400).send(e)
    })

}

exports.post = (req, res, next) => {
    var costumer = new Costumer(req.body)
    costumer.save().then(x => {
        res.status(201).send({ 
            message: 'Cliente cadastrado com sucesso' 
        })
    }).catch(e => {
        res.status(400).send({
            message: 'Falha ao cadastrado cliente',
            data: e
        })

    })

}
exports.put = (req, res, next) => {
    const id = req.params.id
    res.status(201).send({
        id: id,
        item: req.body
    })
}
exports.delete = (req, res, next) => {
    res.status(200).send(req.body)
}