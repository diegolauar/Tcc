
const repository = require('../repositories/vouncher-repository')
const repositoryCustomer = require('../repositories/customer-repository')
const repositoryRedemption = require('../repositories/redemption-repository')

exports.get = async (req, res, next) => {
    try
    {
        var data = await repository.get(req)
        res.status(200).send(data)
    }
    catch (e){
        res.status(500).send({
            message: 'Falha ao buscar requisição',
            statusCode: 500
        })
    }
}

exports.getById = async (req, res, next) => {    
    try
    {  
       var data = await repository.getById(req)       
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
    const cpf = req.body.cpf
    req.params.cpf = cpf


    let clientUpdate = await repositoryCustomer.getByCpf(req)
    
    req.body.name = clientUpdate[0].name    
    
    let pegarIdResgate = await repositoryRedemption.getByCpf(req) 

    req.body.establishmentId = req.headers.establishmentid

    let ultimoId = pegarIdResgate.pop()  
    req.body.idResgate = ultimoId._id   

    await repository.create(req)
        res.status(201).send({
            message: 'Vouncher efetuado com sucesso',
            status: 201
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

// exports.delete = async (req, res, next) => {
//     try
//     {
//     await repository.delete(req.params.id)
//         res.status(201).send({
//             message: 'Estabelecimento removido com sucesso'
//         })
//     }
//     catch(e){
//         res.status(500).send({
//             message: 'Falha ao buscar requisição'
//         })
//     }
//     
// }