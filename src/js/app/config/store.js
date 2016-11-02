import { createStore, applyMiddleware }     from 'redux';
import { syncHistoryWithStore }             from 'react-router-redux';
import { browserHistory }                   from 'react-router';
import createLogger                         from 'redux-logger';

import rootReducer                          from './reducers';

const logger = createLogger();

const defaultState = {
    singleChartData: {},
    allChartData: [
        {
            categoryName: 'Здоровье и спорт',
            value: 9
        },
        {
            categoryName: 'Друзья и окружение',
            value: 8
        },
        {
            categoryName: 'Отношения',
            value: 7
        }
    ]
};

const store = createStore(rootReducer, defaultState, applyMiddleware(logger));
export const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
    module.hot.accept('./reducers', () => {
        const nextRootReducer = require('./reducers').default;
        store.replaceReducer(nextRootReducer);
    });
}

export default store;
