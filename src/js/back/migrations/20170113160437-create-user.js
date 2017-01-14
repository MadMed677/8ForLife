module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            firstName: {
                type: DataTypes.STRING,
                field: 'first_name'
            },
            lastName: {
                type: DataTypes.STRING,
                field: 'last_name'
            },
            username: {
                type: DataTypes.STRING,
                unique: true,
                notNull: true
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => queryInterface.dropTable('Users')
};
