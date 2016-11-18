const map = require('lodash.map');
const ctrls = require('require-all')({
	dirname: __dirname + '/controllers',
	filter: /(module).js/,
	recursive: true
})

module.exports = function(app) {
	map(ctrls, ctrl => {
		const item = ctrl.module.controller;
		console.log('item: ', item);
		return app.get(item.route, item.get);
	});
};
