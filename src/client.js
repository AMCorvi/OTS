import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute} from 'react-router'
import {Provider} from 'react-redux'
import store, {history} from './store/store'

//Components
import App from './reactApp.js'
import Layout from './components/layout/layout'


import About from './components/frames/about/about'
import Frames from './components/layout/components/frames.js'
import Login from './components/frames/login/login'
import Places from './components/frames/places/places'
import Scene from './components/frames/scene/scene'

const app = document.getElementById('app')


ReactDOM.render(
<Provider store={store} >

    <Router history={history}>

        <Route path="/" component={App}>
            <IndexRoute component={Places}/>
            <Route path="/about" component={About}/>
            <Route path="/login" component={Login}/>
            <Route path="/scene/:sceneID/:photoID" component={Scene}/>
        </Route>

    </Router>

</Provider>  , app)