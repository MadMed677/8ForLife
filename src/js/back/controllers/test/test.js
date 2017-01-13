const User = require('../../models').User;

const TestClass = {
    route: '/test1',

    * get(next) {
        yield User.findById(1).then(response => {
            const user = response.dataValues;
            console.log('user: ', user);
            this.type = 'json';
            this.body = user;
        });
    }
};

module.exports = TestClass;
