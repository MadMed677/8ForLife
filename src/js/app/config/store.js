import { createStore, applyMiddleware }     from 'redux';
import { syncHistoryWithStore }             from 'react-router-redux';
import { browserHistory }                   from 'react-router';
import createLogger                         from 'redux-logger';
import thunk                                from 'redux-thunk';

import rootReducer                          from './reducers';

const logger = createLogger();

const defaultState = {
    singleChartData: {},
    allChartData: {}
};

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk, logger));
export const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
    module.hot.accept('./reducers', () => {
        const nextRootReducer = require('./reducers').default;
        store.replaceReducer(nextRootReducer);
    });
}

export default store;
