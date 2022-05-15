const mongoose = require("mongoose")
const repository = require('../repositories/customer-repository')

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

exports.getIdEstab = async (req, res, next) => {
    try
    {
        var data = await repository.getEstablishmentId(req)
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
       var data = await repository.getByCpf(req)
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
    await repository.create(req)
        res.status(201).send({
            message: 'Cliente cadastrado com sucesso',
            body: req.body,
            statusCode: 201
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
    await repository.update(req)
        res.status(201).send({
            statusCode: 200,
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
    await repository.delete(req)
        res.status(201).send({
            statusCode: 200,
            message: 'Cliente removido com sucesso'
        })
    }
    catch(e){
        res.status(500).send({
            message: 'Falha ao buscar requisição'
        })
    }
    
}