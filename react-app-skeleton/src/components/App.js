import React from 'react'
import Dog from './Dog'
import Cat from './Cat'
import { Link } from 'react-router'

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>Navbar</h1>
        <Link style={styles.link} to='/dog/pepita' activeStyle={{ color: 'red' }} >Dog</Link>
        <Link style={styles.link} to='/cat/pepito' activeStyle={{ color: 'red' }}>Cat</Link>
        <Link style={styles.link} to='/' activeStyle={{ color: 'red' }}>CatDog</Link>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
})

const styles = {
  link: {
    margin: 5
  }
}

export default App
