import React                from 'react';
import ReactDOM             from 'react-dom';
import { Link, Router, Route, IndexRoute, browserHistory }     from 'react-router';
import { Provider }         from 'react-redux';
import store, { history }   from './store';

import Root                 from './root.react';
import Main                 from './main.react';

const router = (
    <Provider store={ store }>
        <Router history={ history }>
            <Route path="/" component={ Root }>
                <IndexRoute component={ Main } />
            </Route>
        </Router>
    </Provider>
);

ReactDOM.render(router, document.getElementById('root'));
