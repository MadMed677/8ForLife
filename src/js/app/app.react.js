import React                from 'react';
import ReactDOM             from 'react-dom';
import { Router, Route, IndexRoute }     from 'react-router';
import { Provider }         from 'react-redux';
import store, { history }   from './config/store';

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
