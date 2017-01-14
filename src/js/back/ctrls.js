const map = require('lodash.map');
const path = require('path');
const ctrls = require('require-all')({
    dirname: path.join(__dirname, '/controllers'),
    filter: /(module).js/,
    recursive: true
});

module.exports = app => {
    map(ctrls, ctrl => {
        const item = ctrl.module.controller;
        return app.get(item.route, item.get);
    });
};
