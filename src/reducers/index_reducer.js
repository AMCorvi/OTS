import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import locations from './location_reducer'
import comments from './comment_reducer'

 const rootReducer = combineReducers({

        locations,
        comments,
        routing: routerReducer

});

export default rootReducer;
