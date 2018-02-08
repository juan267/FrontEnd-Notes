// Todo dentro de un Statefull component

// const Switch = React.createClass({
//   getInitialState() {
//     return {
//       payMethod: 'bitcoin'
//     } // --> este es el estado inicial del componente
//   },
//   select(choice) {
//     return (event) => { // --> esta funcion es realmente el event Handler por eso recibe el evento
//       this.setState({ // --> Aca usamos setState para cambiar el estado del componente
//         payMethod: choice
//       })
//     } // --> te puedes dar cuenta de que 'select' devuelve una funcion que tiene un clousure sobre 'choice' de esa forma podemos pasarle este argumento, otra forma de hacerlo seria usando '.bind'
//   },
//   renderChoice(choice) {
//     let activeChoice = this.state.payMethod === choice ? styles.active : null
//     return (
//       <div
//         style={activeChoice}
//         className='choice'
//         onClick={this.select(choice)} // Event handler para este 'div'
//       >
//       {choice}
//       </div>
//     )
//   },
//   render() {
//     return (
//       <div>
//         {this.renderChoice('Credit Card')} {/* De este forma todo el UI de un choice esta contenido dentro de renderChoice */}
//         {this.renderChoice('Bitcoin')}
//         Pay with: {this.state.payMethod}
//       </div>
//     )
//   }
// })


// Separacion entre un Statefull component padre y un stateless component hijo

const Switch = React.createClass({
  getInitialState() {
    return {
      payMethod: 'bitcoin'
    }
  },
  select(choice) {
    return (event) => {
      this.setState({
        payMethod: choice
      })
    }
  },
  render() {
    return (
      <div>
        <Choice
          active={this.state.payMethod === 'Credit Card'}
          onClick={this.select('Credit Card')}
          label='Credit Card'/>
        <Choice
          active={this.state.payMethod === 'Bitcoin'}
          onClick={this.select('Bitcoin')}
          label='Bitcoin'/>
        Pay with: {this.state.payMethod}
      </div>
    )
  }
})

const Choice = (props) => {
  let activeChoice = props.active ? styles.active : null

  return (
    <div
      style={activeChoice}
      className='choice'
      onClick={props.onClick}
    >
    {props.label}
    </div>
  )
}

// CSS en javascript

const styles = {
  active: {
    backgroundColor: 'skyblue'
  }
}


ReactDOM.render(<Switch />, document.getElementById('react-container'))
