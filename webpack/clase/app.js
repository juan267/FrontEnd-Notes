import $ from 'jquery'
import React from 'react'
import ReactDOM from 'react-dom'
import * as styles from './style.css'
import {Router, Route, hashHistory, Link} from 'react-router'

const Hello = React.createClass({
  getDefaultProps() {
    return {
      params: {
        name: 'Dexter'
      }
    }
  },
  render() {
    return (
      <div>
        <h1>Hello {this.props.params.name}</h1>
        <Link to='/'>Main</Link>
      </div>
    )
  }
})

const Hello2 = React.createClass({
  render() {
    return (
      <div>
        <h1>Hello2</h1>
        <Link to='/'>Main</Link>
      </div>
    )
  }
})

const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>Main</h1>
        <Link to='/hello/juan' activeStyle={{ color: 'red' }}>Hello</Link>
        <Link to='/hello2' activeStyle={{ color: 'red' }}>Hello 2</Link>
        {this.props.children}
      </div>
    )
  }
})


const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <Route path='/hello/:name' component={Hello}/>
      <Route path='/hello2' component={Hello2}/>
    </Route>
  </Router>
)

// const Hello = ({name}) => {
//   console.log(`Hola ${name}`)
// }
// Hello({name: 'Juan'})

ReactDOM.render(routes, document.getElementById('root'))





// $('#root').html('Hola mundo Jquery normal')
