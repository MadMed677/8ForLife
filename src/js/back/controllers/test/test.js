const User = require('../../models').User;

const TestClass = {
    route: '/test1',

    * get(next) {
        this.body = 'test1';
        yield next;
    }
};

module.exports = TestClass;
