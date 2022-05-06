const mongoose = require("mongoose")
const Costumer = mongoose.model('Costumer')

exports.get = (req, res, next) => {
    Costumer.find({ active: true }, 'name email password cpf roles').then(data => {
        res.status(200).send(data)
    }).catch(e => {
        res.status(400).send(e)
    })

}

exports.getByCpf = (req, res, next) => {
    Costumer.findOne({ cpf: req.params.cpf, active: true},'name email password cpf roles').then(data => {
        res.status(200).send(data)
    }).catch(e => {
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
    Costumer.findOneAndUpdate({ cpf: req.params.cpf },{
        $set:{ 
            name: req.body.name,
            password: req.body.password
        }
    }).then(x=> {
        res.status(201).send({
            message: 'Cliente atualizado com sucesso'
        })
    }).catch(e=>{
        res.status(400).send({
            message: 'Falha ao atualizar cliente',
            data: e
        })
    })
}
exports.delete = (req, res, next) => {
    res.status(200).send(req.body)
}