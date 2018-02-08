import React from 'react'
import * as styles  from '../styles/dogStyles.css'
import dogImage from '../img/puppies.jpg'


const Dog = React.createClass({
  render() {
    return(
      <div>
        <h1 className='dog'>Soy {this.props.params.name}</h1>
        <img src={dogImage} alt='' />
      </div>
    )
  }
})

export default Dog
