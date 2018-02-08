////////////////////////////////////////////////
////////COMPONENT LYFE CYCLE
////////////////////////////////////////////////


// Los componentes en React, tienen un ciclo de vida como las personas, Que nacen , crecen , envejecen y en algun punto mueren.

// Como en la vida real podemos decir que ciertas cosas pasan en determinados tiempos del ciclo de vida. Por ejemplo cuando la persona es adolesente va al colegio, cuando es mayor se pensiona. Lo mismo con los compontes en react, en determinados momentos podemos ejecutar ciertas acciones.

// Ahora bien podemos dividir los ciclos de vida de un componente de React en dos categorias:

/*

1. Cuando un Componente es montado/Renderizado, o desmontado/Removido
2. Cuando un Componente recibe nuevos datos

*/

// Montando/Desmontando:

// Se dice que un componente se esta montando cuando es inicializado y añadido al DOM y es desmontado cuando es removido del DOM. Dado esta definicion, estos metodo durante el ciclo de vida solo son invocados una vez, a si como nosotros los humanos solo nacemos y morimos una vez durante nuestras vidas.


// Acciones o cosas que posiblemente queremos hacer durante los periodos de montar y desmontar:

/*

1. Establecer default props
2. Agregar un estado inicial al componente
3. Hacer un request de Ajax para traer informacion que el componente necesita
4. Hacer setup de listeners de librerias (web sockets, Firebase)
5. Remover listeners que durante el Mounting se habian creado

*/


// Cuando un componente recibe Datos:

// Estos son metodos del ciclo de vida que van a ser invocados cuando el componente recibe datos de alguna forma por medio de su componente Padre. Nos permiten en ese momento del tiempo realizar ejecutar codigo cuando tenemos nuevos datos.




// Abajo encontraras un ejemplo de dos componentes Padre-Hijo, en cada uno de ellos hemos puesto todos los metodos del ciclo de vida de un componente si corres este codigo en tu navegador veras que cada uno console logueaa el momento en el que es invocado de forma que pudes ver en que orden corren.

const ParentComponent = React.createClass({
  getDefaultProps() {
    console.log("ParentComponent - getDefaultProps")
  }, // Primer metodo en la vida agregamos Props defaults
  getInitialState() {
    console.log("ParentComponent - getInitialState")
    return { text: "" }
  }, // Segundo metodo en la vida nos ayuda a definir el estado inicial del componente
  componentWillMount() {
    console.log("ParentComponent - componentWillMount")
  }, // Tercer metodo en la vida, nos permite ejecutar codigo antes de que el componente sea montado en el DOM, Despues de este metodo render() es invocado
  componentDidMount() { // Quinto metodo en la vida, invocado despues de render() osea justo despues que el componente sea montado en el DOM. Este es un buen momento para hacer AJAX request, o usar alguna libreria externa de javascript que tenga que hacer cosas con los elementos una vez ya exiten en el DOM. De este punto en adelante los metodos del ciclo de vida seran invocados dependiendo en lo que pase
    console.log("ParentComponent - componentDidMount")
  },
  componentWillUnmount() { // Este metodo sera invocado una vez vayamos a remover el Componente del DOM.
    console.log("ParentComponent - componentWillUnmount")
  },
  onInputChange(e) {
    this.setState({ text: e.target.value })
  },
  render() { // Invocamos render que es lo mismo que decir que el componente quede Montado en el DOM.
    console.log("ParentComponent - render")
    return (
      <div className="container">
        <input
          value={this.state.text}
          onChange={this.onInputChange} />
        <ChildComponent text={this.state.text} />
      </div>
    )
  }
})

const ChildComponent = React.createClass({
  getDefaultProps() {
    console.log("ChildComponent - getDefaultProps")
  },
  getInitialState() {
    console.log("ChildComponent - getInitialState")
    return { dummy: this.props.text }
  },
  componentWillMount() {
    console.log("ChildComponent - componentWillMount")
  },
  componentDidMount() {
    console.log("ChildComponent - componentDidMount")
  },
  componentWillUnmount() {
    console.log("ChildComponent - componentWillUnmount")
  },
  componentWillReceiveProps(nextProps) { // Este metodo es invocado cuando el component padre le pasa nuevos props, al componente Hijo, los nuevos props son recibidos en el argumento.
    console.log("ChildComponent - componentWillReceiveProps")
    console.log(nextProps)
  },
  shouldComponentUpdate(nextProps, nextState) { // Este metodo es invocado justo antes de hacer un render, debe devolver true o false, en base a esto el render sucede o no.
    console.log("ChildComponent - shouldComponentUpdate")
    return true
  },
   componentWillUpdate(nextProps, nextState) { // Este metodo es invocado justo antes de hacer render() donde el render() ya esta garantizado.
    console.log("ChildComponent - componentWillUpdate")
    console.log("nextProps:")
    console.log(nextProps)
    console.log("nextState:")
    console.log(nextState)
  },
  componentDidUpdate(previousProps, previousState) { // Este metood es invocado justo despues de haber hecho un render()
    console.log("ChildComponent - componentDidUpdate")
    console.log("previousProps:")
    console.log(previousProps)
    console.log("previousState:")
    console.log(previousState)
  },
  render() {
    console.log("ChildComponent - render")
    return (
      <div>Props: {this.props.text}</div>
    )
  },
})

ReactDOM.render(
  <ParentComponent />,
  document.getElementById("react-container")
)
