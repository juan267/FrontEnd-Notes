/////////////////////////////////////////////////////////
///// Componentes en React /////////
/////////////////////////////////////////////////////////


// Un comoponente de React es un objecto de javascript que como minimo debe tener un metodo 'render'. Se espera que render devuelva un ReactElement

// El objetivo de un componente es el de:

// Hacer render de un ReactElement y añadirle funcionalidad

// Cosas que toca saber sobre los componentes en React:

/*

1. render(): la unica funcion requerida en cada componente
2. props: los inputs, o parametros que reciben nuestros componentes
3. context: Una variable global de todos nuestros componentes
4. state: la forma en que le agregamos datos locales a nuestros componentes
5. stateless componentes: componentes que no tienen estado
6. children: los componentes o elementos hijos de un componente
7. statics: como crear metodos de 'clase' dentro de un componente

*/


/////////////
//// Creando Componentes de React:
/////////////


// Hay dos formas de crear un componente en React

// 1. React.createClass()

const App = React.createClass({
  render() {
    return
    // Metodo requerido
  }
})

// 2. ES6 clases

class App extends React.Component {
  render() {
    return
    // Metodo requerido
  }
}

// Ambas formas son equivalentes pero tienen diferencias sutiles, cual usar es totalmente un tema de prerencias en este link puedes leer mas sobre el tema: https://facebook.github.io/react/docs/reusable-components.html

// render() debe devolver un ReactElement Tree. Cuando un componente es inicializado/Montado este llama su metodo render(). Render solo puede devolver un ReactElement :

// Codigo que no funciona
const App = React.createClass({
  render() {
    return (
      <h1>Hola soy el primer h1</h1>
      <h1>Hola soy el segundo h1</h1> // Esto no es valido dado que un metodo no puede devolver dos cosas a la vez
    )
  }
})

//Codigo que si funciona
const App = React.createClass({
  render() {
    return ( // Metomos todo dentro de un div de esa forma solo devolvemos ese div que contiene todo
      <div>
        <h1>Hola soy el primer h1</h1>
        <h1>Hola soy el segundo h1</h1>
      </div>
    )
  }
})

/////////////
//// Llevando datos hasta render()
/////////////

// PROPS:

// los props son los parametros/argumetos de nuestros componentes ej:
<div>
  <Header headerText="Hola mundo" />
</div>

// En el codigo de arriba estamos creando un 'div' normal de HTML que por dentro tiene un <Header/> el cual es una instancia del componente 'Header'. A este le estamos pasando el string 'Hola mundo' en el atributo 'headerText'. Cuando le pasamos atributos atributos a nuestros componentes estos se vuelven disponibles en el componente por medio de la propiedad `this.props`. En este caso podemos acceder al valor de headerText por la propiedad this.props.headerText

const Header = React.createClass({
  render() {
    return (
      <h1>{this.props.headerText}</h1>
    )
  }
})

// Podemos acceder al valor de headerText pero no podemos cambiarlo. Header puede usar el valor de headerText en si mismo como en el caso de arriba o puede pasarlo como argumento a alguno de sus componentes hijos.


// PROP-TYPES

// Los proptypes son la forma en que podemos validar los valores que nos llegan por medio de props. Nos dan una red de seguridad dado de que si por algun motivo llega a llegar un valor que no sea el indicado el componente va a dar un error, y aparte de esto nos ayudan a documentar el funcionamiento de nuestros componentes.

// Podemos definir los proptypes como una propiedad del componente que estemos creando con createClass

const Component = React.createClass({
  propTypes: { // --> estos son los proptTypes
    name: React.PropTypes.string, // --> aca estamos diciendo que este comoponent recibe un 'name' de typo string
    totalCount: React.PropTypes.number
  },
//...
})



// Estos son los  validadores por defecto en React:

/*
• string
• number
• boolean
• function
• object
• array
• arrayOf - expects an array of a particular type
• node
• element

*/

// Tambien podemos darle valores por defecto a nuestros props en caso de que no les pasan un valor, este es un ejemplo sencillo de este comportamiento con un contador

const Counter = React.createClass({
  propTypes: {
    initialValue: React.PropTypes.number
  },
  getDefaultProps() {
    return {
      initialValue: 1
    }
  },
  render() {
    return (
      <h1>{this.props.initialValue}</h1>
    )
  }
})

// Dado esta configuracion estas dos formas de invocar/renderizar Counter son equivalentes

<Counter />
<Counter initialValue={1}/>

// STATE

// Antes de entrar a ver que es el state tenemos que entender la diferencia entre que es un stateful Component y un stateless Commponent

// Cuando un componente necesita tener un punto de datos dinamico, se considera que ese componente es stateful. Por ejemplo cuando se mueve el interruptor de la luz a prendido podemos decir que el interruptor esta manteniendo el estado de 'on'. Apagar la luz puede ser interpretado como pasar el interruptor a tener el estado de 'off'

// Cuando construimos nuestra aplicacion podemos decir que tenemos varios interruptores que describen alguna configuracion, en estos casos podemos decir que nuestro component necesita de 'state'

// El state agrega complejidad e incremente la dificultad a la hora de construir componentes por lo cual es recomendable tener la menor cantidad posible de componentes que sean stateful


////////////////////
/////STATEFUL COMPONENTS
///////////////

// Como se ve un componente que es stateful :

const Switch = React.createClass({
  getInitialState() {
    return {} // --> este es el estado inicial del componente
  }
})

// Poner solo el estado inicial como tal no es interesante, la magia empieza a suceder cuando usamos la referencias al estado dentro de 'render'


// Este es un component stateful en donde estamos haciendo tracking de cual es el metodo preferido del usuaria para hacer un pago. Pero todavia no podemos hacer que el usuario cambie esta eleccion.
const Switch = React.createClass({
  getInitialState() {
    return {
      payMethod: 'bitcoin'
    } // --> este es el estado inicial del componente
  }
  render() {
    return (
      <div>
        <div className='choice'>Credit Card</div>
        <div className='choice'>Bitcoin</div>
        Pay with: {this.state.payMethod} {/* aca usamos el valor que este en el estado*/}
      </div>
    )
  }
})


//Para añadir interactividad entre el usurio y el componente de modo que este pueda modificar su estado, tenemos que añadir un 'event handler' que maneje las acciones del usuario.

// En este caso vamos a escuchar por el evento 'onClick', el cual se lo podemos poner a cualquier nodo de nuestro componente

const Switch = React.createClass({
  getInitialState() {
    return {
      payMethod: 'bitcoin'
    } // --> este es el estado inicial del componente
  }
  select(choice) {
    return (event) => { // --> esta funcion es realmente el event Handler por eso recibe el evento
      this.setState({ // --> Aca usamos setState para cambiar el estado del componente
        payMethod: choice
      })
    } // --> te puedes dar cuenta de que 'select' devuelve una funcion que tiene un clousure sobre 'choice' de esa forma podemos pasarle este argumento, otra forma de hacerlo seria usando '.bind'
  },
  render() {
    return (
      <div>
        <div className='choice'
          onClick={this.select('Credit Card')} // Event handler para este 'div'
          >Credit Card</div>
        <div className='choice'
          onClick={this.select('Bitcoin')}
           // Aca ponemos el event handler para cuando le hagan click a este 'div'. Select es invocada cuando hacemos render de este componente. Ahora bien cuando el usuario hace click este invoca la funcion que devuelve select, la cual tiene un clousere sobre choice y puede usar este valor.
          >Bitcoin</div>
        Pay with: {this.state.payMethod}
      </div>
    )
  }
})

// setState causa que ocurra un re render, por lo cual el nuevo valor los nuevos valores dentro del estado quedan reflejados en el componente renderizado. Asi mismo como setState cause este rerenderizado esto hace que react tenga que posiblemente hacer cambios en el DOM real lo cual es una operacion costosa, por lo cual toca usar setState con modestia.

// Algunas optimizaciones que podemos hacer:

// Siguiendo la filosofia DRY, podemos identificar que nos estamos repitiendo cada vez que creamos un 'choice', por lo cual podemos abstraer este pedazo de UI en una funcion. Asi mismo podemos agregar css para identificar cual es la opcion activa

const Switch = React.createClass({
  getInitialState() {
    return {
      payMethod: 'bitcoin'
    } // --> este es el estado inicial del componente
  },
  select(choice) {
    return (event) => { // --> esta funcion es realmente el event Handler por eso recibe el evento
      this.setState({ // --> Aca usamos setState para cambiar el estado del componente
        payMethod: choice
      })
    } // --> te puedes dar cuenta de que 'select' devuelve una funcion que tiene un clousure sobre 'choice' de esa forma podemos pasarle este argumento, otra forma de hacerlo seria usando '.bind'
  },
  renderChoice(choice) {
    // Aca miramos si la opcion es la opcion actualmente elegida si lo es le pones estilos si no no
    let activeChoice = this.state.payMethod === choice ? styles.active : null
    return (
      <div
        style={activeChoice} // activeChoice puede ser null o un objeto
        className='choice'
        onClick={this.select(choice)} // Event handler para este 'div'
      >
      {choice}
      </div>
    )
  },
  render() {
    return (
      <div>
        {this.renderChoice('Credit Card')} {/* De este forma todo el UI de un choice esta contenido dentro de renderChoice */}
        {this.renderChoice('Bitcoin')}
        Pay with: {this.state.payMethod}
      </div>
    )
  }
})

// CSS en javascript

const styles = {
  active: {
    backgroundColor: 'skyblue'
  }
}

// getInitialState() cumple dos funciones:

/*
  1. Nos permite definir el estado inicial de nuestro componente
  2. Le inidica a React que este es un stateful component
*/

// Pensando sobre el estado:

// Como añadir estado a nuestros components causa que estos se vuelvan mas complejos tenemos que pensar muy bien cuando realmente tenemos que hacer que un componente sea stateful. Dos reglas de dedo claras son las siguientes:

/*
  1.El estado no puede ser 'traido' de algun lado externo ejemplo por medio de ajax request.
  2. El estado no puede ser pasado mediante props por un componente que este mas alto en la herarquia.
*/

// Si estas dos condiciones se cumplen podemos decir que nuestro componente necesita de state.

////////////////////
/////STATELESS COMPONENTS
///////////////

// Los stateless components es la forma en que react nos deja crear componentes 'livianos' que solo necesitan de la funcion 'render' y no dependen de tener estado.

// EJ:
const Header = function(props) { // --> Podras notas que no usamos React.createClass, si no simplemente una funcion que recibe como argumento los props
  return (
    <h1>{props.headerText}</h1> // Como ya no hay un objeto si no simplemente una funcion accedemos a los props por medio del argumento props que es un objeto
  )
}

// Un stateless component solo puede hacer render de UI, no puede tener ninguno de los otros metodos de la api de react pro propTypes. Su beneficio es que al no tener estado simplifican la complejidad de la aplicacion, y ademas tienen beneficios de performance debido a la forma en que React los maneja internamente.


// Convirtiendo Switch en un staless component:


// Como tal no podemos volver a Switch en un componente totalmente sin estado por que de alguna forma tenemos que saber cual es la seleccion actual, lo que si podemos hacer es desacoplar cada 'choice' de switch en su propio componente sin estado

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
  }, // Ya no tenemos la funcion renderChoice()
  render() {
    return (
      <div>
        <Choice // Aca invocamos/renderizamos una instancia de 'Choice' y le pasamos varios props
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


// Choice es un stateless component el cual solo debe renderizar un poco de UI en base a los props que le pasan. De esta manera ahora Choice es un componente completamente independiente de Switch y puede ser reutilizado en cualquier lado, la unica condicion que tiene es que le pasan los props: active, onClick y label

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

// El usar stateless components crea una base de codigo con componentes mucho mas reutilizables.

// CSS en javascript

const styles = {
  active: {
    backgroundColor: 'skyblue'
  }
}









