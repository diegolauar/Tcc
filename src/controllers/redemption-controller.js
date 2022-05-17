
const repository = require('../repositories/redemption-repository')
const repositoryCustomer = require('../repositories/customer-repository')


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

exports.post = async (req, res, next) => {   
  try
  {
    const cpf = req.body.cpf

    req.params.cpf = cpf
    req.body.total = (parseFloat(req.body.value) * (parseFloat(req.body.quantity)))    

    let total = -1 * req.body.total    
    let clientUpdate = await repositoryCustomer.getByCpf(req)

    let sendPoint = parseFloat(clientUpdate[0].balance) 
    sendPoint += parseFloat(total)     
    req.body.balance = sendPoint

    await repositoryCustomer.update(req)
    req.body.establishmentId = req.headers.establishmentid    

    await repository.create(req)
        res.status(201).send({
            message: 'Resgate efetuado com sucesso',
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

// exports.put = async (req, res, next) => {
//     try
//     {    
//     await repository.update(req.params.cpf, req.body)
//         res.status(201).send({
//             message: 'Ponto atualizado com sucesso'
//         })
//     }
//       catch(e){
//         res.status(500).send({
//             message: 'Falha ao buscar requisição'
//         })
//     }
// }// 

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