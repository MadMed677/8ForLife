const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'root', '');

module.exports = sequelize;
