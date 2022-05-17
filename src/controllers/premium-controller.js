const repository = require('../repositories/premium-repository')

exports.getIdEstab = async (req, res, next) => {
    try
    {
        var data = await repository.getEstablishmentId(req)
        res.status(200).send(data)
    }
    catch (e){
        res.status(500).send({
            message: 'Falha ao buscar requisição',
            statusCode: 500
        })
    }
}

exports.post = async (req, res, next) => {
  try
     {    
        await repository.create(req)
        res.status(201).send({
            message: 'Premio cadastrado com sucesso',
            body: req.body,
            statusCode: 201
        })
    
    }
  catch(e){
    res.status(500).send({
        message: 'Falha ao buscar requisição',
        statusCode: 500
    })
    }    
}

exports.put = async (req, res, next) => {
    try
    {           
    await repository.update(req)
        res.status(201).send({
            statusCode: 201,
            message: 'Premio atualizado com sucesso'
        })
    }
      catch(e){
        res.status(500).send({
            message: 'Falha ao buscar requisição',
            statusCode: 500
        })
    }
}

exports.delete = async (req, res, next) => {
    try
    {
    await repository.delete(req)
        res.status(201).send({
            statusCode: 201,
            message: 'Premio removido com sucesso'
        })
    }
    catch(e){
        res.status(500).send({
            message: 'Falha ao buscar requisição',
            statusCode: 500
        })
    }
    
}