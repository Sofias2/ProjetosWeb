//sequelize -> aplicação para usar bancos relacionas com o node, é normalmente usada para poucos dados
const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/app.db'
});

module.exports = sequelize //exportando