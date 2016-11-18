const TestClass = {
	route: '/test1',

	get: function*(next) {
		this.body = 'test1';
		yield next;
	}
};

module.exports = TestClass;
