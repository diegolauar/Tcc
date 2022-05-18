
const repository = require('../repositories/establishment-repository')

exports.getEstablishments = async (req, res, next) => {
    try
    {
        var data = await repository.getEstablishments()
        if(data.length == 0){
            return res.status(404).send({
                message: 'Estabelecimento não encontrado',
                statusCode: 404
            })
        }
        res.status(200).send(data)
    }
    catch (e){
        res.status(500).send({
            message: e,
            statusCode: 500
        })
    }
}

exports.getById = async (req, res, next) => {
    try
    {
       var data = await repository.getById(req.params.id)
       if(data.length == 0){
        return res.status(404).send({
            message: 'Estabelecimento não encontrado',
            statusCode: 404
        })
    }
       res.status(200).send(data)
    }
    catch (e){
        res.status(500).send({
            message: 'Falha ao buscar requisição',
            statusCode: 500
        })
    }

}

exports.login = async (req ,res ,next) => {
    const establishment = await repository.getEstablishments()
    console.log(req)
    const establishmentLogin = establishment.filter(element => 
        element.email === req.body.email && element.password === req.body.senha
    )
    if(establishmentLogin.length > 0){
        res.status(200).send({
            statusCode: 200,
            message: "Login realizado com sucesso",
            establishmentId: establishmentLogin[0]._id
        })
        return
    }
    res.status(404).send({
        message: 'Dados inválidos',
        statusCode: 404
    })
} 

exports.post = async (req, res, next) => {
  try
  {
    let establishments = await repository.getEstablishments()
    let establishmentCreated = establishments.filter(element => (element.cnpj == req.body.cnpj))
    if(establishmentCreated.length == 0){
        await repository.create(req.body)
        res.status(201).send({
            message: 'Estabelecimento cadastrado com sucesso',
            statusCode: 200
        })
    } else{
        res.status(400).send({
            message: 'Estabelecimento já cadsatrado',
            statusCode: 400
        })
    }    
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
    await repository.update(req.params.id, req.body)
        res.status(201).send({
            message: 'Estabelecimento atualizado com sucesso',
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

exports.delete = async (req, res, next) => {
    try
    {
    await repository.delete(req.params.id)
        res.status(201).send({
            message: 'Estabelecimento removido com sucesso',
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