
const repository = require('../repositories/point-repository')
const repositoryCustomer = require('../repositories/customer-repository')


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

exports.post = async (req, res, next) => {   
  try
  {    
    req.params.cpf = req.body.cpf
    let clientUpdate = await repositoryCustomer.getByCpf(req) 
    req.body.value = clientUpdate.balance  
      
    await repositoryCustomer.update(req)

  
    await repository.create(req.body)
        res.status(201).send({
            message: 'Ponto cadastrado com sucesso',
            status: 201
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
            message: 'Ponto atualizado com sucesso'
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