import {createstore, compose} from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { hashHistory } from 'react-router'

//Base reducer 
import rootReducer from './reducer/index'

// Import placeholder data here for testing dev

const defaultState = {
    locales,
    comments 
}


export const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(hashHistory, store)