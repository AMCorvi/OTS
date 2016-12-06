import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute} from 'react-router'
import {Provider} from 'react-redux'
import store, {history} from './store/store'

//Components
import Main from './main'
import Layout from './layout'


import About from './components/frames/about/about'
import Frames from './components/frames'
import Login from './components/frames/login/login'
import Places from './components/frames/places/places'

const app = document.getElementById('app')

ReactDOM.render(
<Provider store={store} >

    <Router history={history}>

        <Route path="/" component={Main}>
            <IndexRoute component={Places}/>
            <Route path="/about" component={About}/>
            <Route path="/login" component={Login}/>
        </Route>

    </Router>

</Provider>  , app)