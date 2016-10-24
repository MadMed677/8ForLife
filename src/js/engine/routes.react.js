import React            from 'react';
import { map }          from 'lodash';
import { Route }        from 'react-router';

/**
 * Список всех модулей. Они храняться в входном файле, для каждого бизнес-модуля
 * в файле module.js
 *
 * @type {Object}
 */
const routes = {
    dashboard: require('../app/modules/dashboard/module').default
};

export default map(routes, (route, name) =>
    <Route key={ `route-${name}` } path={ route.route } component={ route.component } />
);
