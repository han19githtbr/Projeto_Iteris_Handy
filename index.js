const express = require('express')

const sequelize = require('./config/database')

const app = express()

const Routes = require('./routes/trem.routes')

app.use(express.json());

sequelize.sync().then(() => console.log('banco de dados conectado com sucesso!'))
/*const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'my-database.db'
})*/

//const sequelize = require('./config/database')
app.use('/tasks', Routes)

app.get('/', (req, res) => {
    res.send('Oiiiiii!')
})

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')  
})       