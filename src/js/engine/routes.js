/**
 * Список всех модулей. Они храняться в входном файле, для каждого бизнес-модуля
 * в файле module.js
 *
 * @type {Object}
 */
const routes = {
    dashboard: require('../app/modules/dashboard/module').default
};

export default routes;
