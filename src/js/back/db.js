const Sequelize = require('sequelize');
const config = require('../../../config.json');
const sequelize = new Sequelize('database', 'root', '');

module.exports = sequelize;
