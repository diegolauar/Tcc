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
            message: 'Falha ao buscar requisição',
            statusCode:500
        })
    }
}

exports.getIdEstab = async (req, res, next) => {
    try
    {
        var data = await repository.getEstablishmentId(req)
        if(data.length == 0){
            return res.status(404).send({
                message: 'Clientes não encontrado',
                statusCode: 404
            })
        }
        res.status(200).send(data)
    }
    catch (e){
        res.status(500).send({
            message: 'Falha ao buscar requisição',
            statusCode:500
        })
    }
}

exports.getByCpf = async (req, res, next) => {    
    try
    {        
       var data = await repository.getByCpf(req)
       if(data.length == 0){
           return res.status(404).send({
               message: 'Cliente não encontrado',
               statusCode: 404
           })
       }
       res.status(200).send(data)
    }
    catch (e){
        res.status(500).send({
            message: 'Falha ao buscar requisição',
            statusCode:500
        })
    }

}

exports.post = async (req, res, next) => {
  try
  {
    req.params.cpf = req.body.cpf
    var createClient = await repository.getByCpf(req)

    if(createClient.length == 0){
        await repository.create(req)
        res.status(201).send({
            message: 'Cliente cadastrado com sucesso',
            body: req.body,
            statusCode: 201
        })
    } else{
        res.status(400).send({
            message: 'Cliente já cadastrado',
            statusCode: 400
        })
    }    
  }
  catch(e){
    res.status(500).send({
        message: 'Falha ao buscar requisição',
        statusCode:500
    })
}

    
}

exports.put = async (req, res, next) => {
    try
    {            
        var clientUpdate = await repository.getByCpf(req)

        if(clientUpdate.length == 0){
            return res.status(404).send({
                message: 'Cliente não encontrado',
                statusCode: 404
            })
        }

        let sendPoint = parseFloat(clientUpdate[0].balance) 
        sendPoint += parseFloat(req.body.balance)   


        req.body.balance = sendPoint


    await repository.update(req)
        res.status(201).send({
            statusCode: 200,
            message: 'Cliente atualizado com sucesso'
        })
    }
      catch(e){
        res.status(500).send({
            message: 'Falha ao buscar requisição',
            statusCode:500
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
            message: 'Falha ao buscar requisição',
            statusCode:500
        })
    }
    
}