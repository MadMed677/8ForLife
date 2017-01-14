module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
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
        }
    }, {
        classMethods: {
            associate: models => {
                // associations can be defined here
            }
        }
    });

    return User;
};
