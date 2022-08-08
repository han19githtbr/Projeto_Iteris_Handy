const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'my-database.db'
})

//const sequelize = require('./config/database')

//const Routes = require('./routes/index.routes')

app.get('/', (req, res) => {
    
})

app.post('/', (req, res) => {

})

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')  
})