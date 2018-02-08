import React from 'react'
import catImage from '../img/cat.jpg'

const Cat = React.createClass({
  render() {
    return(
      <div>
        <h1>Soy {this.props.params.name}</h1>
        <img src={catImage} alt='' />
      </div>
    )
  }
})

export default Cat
