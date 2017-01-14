const User = require('../../models').User;

module.exports = {
    controller: {
        route: '/test1/:id',

        * get() {
            yield User.findById(this.params.id).then(response => {
                const user = response.dataValues;
                this.type = 'json';
                this.body = user;
            });
        }
    }
};
