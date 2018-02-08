import React from 'react'
import ReactDOM from 'react-dom'

const Hello = React.createClass({
  render() {
    return (
      <p>{this.props.name}</p>
    )
  }
})

ReactDOM.render(<Hello name='Juan'/>, document.getElementById('root'))


const hello = ({name}) => {
  console.log(`Hola ${name}`)
}

hello({name: 'Juan'})
