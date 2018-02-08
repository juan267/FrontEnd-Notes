import React from 'react'
import catDogImage from '../img/Catdog.png'

const CatDog = React.createClass({
  render() {
    return(
      <div>
        <img src={catDogImage} alt='' />
      </div>
    )
  }
})

export default CatDog
