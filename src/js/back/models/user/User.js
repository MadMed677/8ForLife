const Sequelize = require('sequelize');
const db = require('db');

const User = db.define('user', {
	firstName: {
		type: Sequelize.STRING,
		field: 'first_name'
	},
	lastName: {
		type: Sequelize.STRING,
		field: 'last_name'
	}
});

User.sync();
