import React from 'react'
import { Router, Route, IndexRoute, hashHistory} from 'react-router'
import App from './components/App'
import Dog from './components/Dog'
import CatDog from './components/CatDog'
import Cat from './components/Cat'

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={CatDog}/>
      <Route path='/dog/:name' component={Dog}/>
      <Route path='/cat/:name' component={Cat}/>
    </Route>
  </Router>
)

export default routes
