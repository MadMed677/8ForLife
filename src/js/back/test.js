const TestClass = {
    route: '/testdata',
    get: function*(next) {
        this.body = 'This works';
        yield next;
    }
};

module.exports = TestClass;
