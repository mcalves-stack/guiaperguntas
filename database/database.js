const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas','root','Veritas@16',{
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = connection;