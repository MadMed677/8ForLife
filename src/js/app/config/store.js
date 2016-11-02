import { createStore, applyMiddleware }          from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory }       from 'react-router';

import rootReducer              from './reducers';

const ping = store => next => action => {
    console.log(`Тип события: ${action.type}, доп.данные: ${action.payload}`);
    return next(action);
};

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

const store = createStore(rootReducer, defaultState, applyMiddleware(ping));
export const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
    module.hot.accept('./reducers', () => {
        const nextRootReducer = require('./reducers').default;
        store.replaceReducer(nextRootReducer);
    });
}

export default store;
