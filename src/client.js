import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'

//Components
import Layout from './layout'

import About from './components/frames/about/about'
import Frames from './components/frames'
import Login from   './components/frames/login/login'
import Places from './components/frames/places/places'

const app = document.getElementById('app')

ReactDOM.render(
    <Router history={hashHistory}>

    <Route path="/" component={Layout}>
        <IndexRoute component={Places}/> 
         <Route path="/about" component={About}/>
         <Route path="/login" component={Login}/>
    </Route>
</Router>

, app)