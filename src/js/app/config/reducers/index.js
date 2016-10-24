import { combineReducers }      from 'redux';
import { routerReducer }        from 'react-router-redux';

import posts from './posts';

const rootReducers = combineReducers({
    posts: posts,
    routing: routerReducer
});

export default rootReducers;
