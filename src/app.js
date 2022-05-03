const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express();

//Conectar ao banco
mongoose.connect('mongodb+srv://root:root@cluster0.tgpsz.mongodb.net/test')


//Carrega a model
const Costumer = require('./models/costumer')

//Carrega as rotas
const indexRoute = require('./routes/index-route')
const costumerRoute = require('./routes/costumer-route')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))




app.use('/', indexRoute)
app.use('/costumer', costumerRoute)

module.exports = app;
