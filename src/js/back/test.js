class Testclass {
    constructor() {
        this.route = '/testdata';
    }

    get() {
        this.body = `Hello test class ${super.route}`;
    }

}

module.exports = Testclass;
