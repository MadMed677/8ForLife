module.exports = {
	controller: {
		route: '/test2',
		get: function*(next) {
			this.body = 'test2';
			yield next;
		}
	}
};
