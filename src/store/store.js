import { createStore, applyMiddleware, compose} from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { hashHistory } from 'react-router'

//Base reducer 
import rootReducer from '../reducers/index_reducer'

// Import placeholder data here for testing dev
import locations from '../data(test)/locations'
import comments from '../data(test)/comments'

const defaultState = {
    locations,
    comments 
}

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)


const store = createStore( rootReducer, defaultState,
       window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      );

export const history = syncHistoryWithStore(hashHistory, store)


// if(module.hot) {
//   module.hot.accept('../reducers/', () => {
//     const nextRootReducer = require('../reducers/index_reducer').default;
//     store.replaceReducer(nextRootReducer);
//   });
// }


 

export default store ;

