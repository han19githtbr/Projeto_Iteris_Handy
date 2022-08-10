/*{
  "development": {
    "storage": "my-database.db",
    "dialect": "sqlite"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}*/

const Sequelize = require('sequelize')

const sequelize = new Sequelize('crud', 'user', 'password', {
  host: './database.sqlite',
  dialect:'sqlite'
})

module.exports= sequelize