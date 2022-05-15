const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
// const cors = require('cors')

const app = express();

//Conectar ao banco
mongoose.connect('mongodb+srv://root:root@cluster0.tgpsz.mongodb.net/test')


//Carrega a model
const Customer = require('./models/customer')
const Establishment = require('./models/establishment')
const Point = require('./models/point')


//Carrega as rotas
const indexRoute = require('./routes/index-route')
const customerRoute = require('./routes/customer-route')
const establishmentRoute = require('./routes/establishment-route')
const pointRoute = require('./routes/point-route')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// app.use(cors())



app.use('/', indexRoute)
app.use('/customer', customerRoute)
app.use('/establishment', establishmentRoute)
app.use('/point', pointRoute)


module.exports = app;
