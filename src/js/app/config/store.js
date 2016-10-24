import { createStore }          from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory }       from 'react-router';

import rootReducer              from './reducers';

const defaultState = {
    posts: []
};

const store = createStore(rootReducer, defaultState);
export const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
    module.hot.accept('./reducers', () => {
        const nextRootReducer = require('./reducers').default;
        store.replaceReducer(nextRootReducer);
    });
}

export default store;
