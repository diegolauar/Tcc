
const repository = require('../repositories/establishment-repository')

exports.getEstablishments = async (req, res, next) => {
    try
    {
        var data = await repository.getEstablishments()
        res.status(200).send(data)
    }
    catch (e){
        res.status(500).send({
            message: e
        })
    }
}

exports.getById = async (req, res, next) => {
    try
    {
       var data = await repository.getById(req.params.id)
       res.status(200).send(data)
    }
    catch (e){
        res.status(500).send({
            message: 'Falha ao buscar requisição'
        })
    }

}

exports.post = async (req, res, next) => {
  try
  {
    await repository.create(req.body)
        res.status(201).send({
            message: 'Estabelecimento cadastrado com sucesso'
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
    await repository.update(req.params.id, req.body)
        res.status(201).send({
            message: 'Estabelecimento atualizado com sucesso'
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
    await repository.delete(req.params.id)
        res.status(201).send({
            message: 'Estabelecimento removido com sucesso'
        })
    }
    catch(e){
        res.status(500).send({
            message: 'Falha ao buscar requisição'
        })
    }
    
}