
const repository = require('../repositories/point-repository')
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
    req.params.cpf = req.body.cpf        
    let clientUpdate = await repositoryCustomer.getByCpf(req)    

    let sendPoint = parseFloat(clientUpdate[0].balance) 
    sendPoint += parseFloat(req.body.value)     

    req.body.balance = sendPoint

    await repositoryCustomer.update(req)
    await repository.create(req)
        res.status(201).send({
            message: 'Ponto cadastrado com sucesso',
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