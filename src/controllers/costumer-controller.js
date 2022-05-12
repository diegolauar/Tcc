const mongoose = require("mongoose")
const Costumer = mongoose.model('Costumer')
const ValidationContract = require('../validators/fluent-validator')
const repository = require('../repositories/costumer-repository')

exports.get = async (req, res, next) => {
    try
    {
        var data = await repository.get()
        res.status(200).send(data)
    }
    catch (e){
        res.status(500).send({
            message: 'Falha ao buscar requisição'
        })
    }
}

exports.getByCpf = async (req, res, next) => {
    try
    {
       var data = await repository.getByCpf(req.params.cpf)
       res.status(200).send(data)
    }
    catch (e){
        res.status(500).send({
            message: 'Falha ao buscar requisição 212',
        })
    }

}

exports.post = async (req, res, next) => {
  try
  {
    await repository.create(req.body).then(x => {
        res.status(201).send({
            message: 'Cliente cadastrado com sucesso',
            body: req.body,
            statusCode: 201
        })
    })
  }
  catch(e){
    res.status(500).send({
        message: 'Falha ao buscar requisição'
    })
}

    
}

exports.put = async (req, res, next) => {
    try
    {    
    await repository.update(req.params.cpf, req.body)
        res.status(201).send({
            message: 'Cliente atualizado com sucesso'
        })
    }
      catch(e){
        res.status(500).send({
            message: 'Falha ao buscar requisição'
        })
    }
}

exports.delete = async (req, res, next) => {
    try
    {
    await repository.delete({ cpf: req.params.cpf })
        res.status(201).send({
            message: 'Cliente removido com sucesso'
        })
    }
    catch(e){
        res.status(500).send({
            message: 'Falha ao buscar requisição'
        })
    }
    
}