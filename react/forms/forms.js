/////////////////////////////////////////////
/////////FORMS en REACT
/////////////////////////////////////////////


// Hacer formularios es una de las cosas mas importantes que cualquier desarrollador de front debe saber hacer durante su carrera. En esta seccion vamos a ver como React maneja los formularios y nos permite hacer todo tipo de cosas con ellos.


// Los formularios son una de las formas mediante las cuales podemos recibir interaccion del usuario. Prodriamos decir que son la forma mas importante de interaccion y los que hacen que una pagina se convierta realmente en un web app.


// Antes de entrar a hacer formularios miremos como podemos interactuar con el usurio mediante unos botones.


// En este componente estamos creando dos botones. A cada uno de ellos les estamos poniendo en evento cuando les hacen click. En cada click cada boton dispara su `event handler` respectivo.
// const ButtonList = React.createClass({
//   handleAppleClick(event) { // --> Event handler de Apple, recibe el objeto evento
//     console.log('Apple was clicked', event)
//   },
//   handlePenClick(event) { // --> Event handler de pen
//     console.log('Pen was clicked', event)
//   },
//   render() {
//     return (
//       <div>
//         <h1>Botones en React</h1>
//         <button
//           onClick={this.handleAppleClick} // --> aca ponemos la referencia al event handler
//           name='Apple Button'
//           value='Apple'
//           >Apple
//         </button>
//         <button
//           // En este link puedes leer todos los eventos que hay https://facebook.github.io/react/docs/events.html
//           onClick={this.handlePenClick}
//           name='Pen Button'
//           value='Pen'
//         >Pen
//         </button>
//       </div>
//     )
//   }
// })

/// Podras darete cuenta rapidamente que el codigo de arriba tiene un grave problema el cual es al paraecer nos toca crear un 'event handler' diferente para cada boton que creemos ya qeu cada uno imprime una cosa diferente.

// Esto lo podemos arreglar usando el evento para abstrer lo que tiene que hacer el event hanldrer en una sola funcion

const ButtonList = React.createClass({
  handleButtonClick(event) { // --> un solo event handler para todos los botones, en el cual sacamos la informacion del evento
    const btn = event.target
    console.log(`El usuario hizo click en ${btn.name}: ${btn.value}`)
  },
  render() {
    return (
      <div>
        <h1>Botones en React</h1>
        <button
          onClick={this.handleButtonClick} // --> aca ponemos la referencia al event handler
          name='Apple Button'
          value='Apple'
          >Apple
        </button>
        <button
          // En este link puedes leer todos los eventos que hay https://facebook.github.io/react/docs/events.html
          onClick={this.handleButtonClick}
          name='Pen Button'
          value='Pen'
        >Pen
        </button>
      </div>
    )
  }
})

// En este cado ya solo tenemos un event handler el cual comparten todos los butones y nuestro codigo es mucho mas DRY


// En este componente vamos a construir el formulario mas sencillo posible
const BasicForm = React.createClass({
  onFormSubmit(event) {
    event.preventDefault()
    // Tenemos dos formas de llegar a los valores de los inputs
    console.log(this.refs.name.value) // --> usando 'refs' que es una forma especifica de react de acceder a un Nodo del DOM pero que prontamente van a Descontinuar
    console.log(event.target.name.value) // --> usamos el evento en el cual el target es todo el form de ahi le preguntamos por el input con name igual a 'name' y el valor. Esta es la forma correcta de hacerlo
  },
  render() {
    return (
      <form onSubmit={this.onFormSubmit}> {/* --> Nos pegamos al event onSubmit del form */}
        <input type='text' ref='name' name='name' placeholder='Pon un nombre' />
        <input type='submit' value="Envia el Nombre" />
      </form>
    )
  }
})

// Ya que vimos como crear y capturar la informacion de un formulario, miremos como podemos usar esta funcionalidad para crear un componente que nos muestre un alista de estudiantes y que podamos agregar estudiantes a esa lista.

const GuestList = React.createClass({
  getInitialState() {
    return {
      students: [] // --> Creamos estado donde podamos mantener la lista de estudiantes
    }
  },
  handleFormSubmit(event) { // --> event handler del formulario
    event.preventDefault() // --> Evitamos que el formulario haga su comportamiento default por que no queremos que recargue la pagina
    const newStudent = event.target.name.value // --> Sacamos el valor del nombre que el usuario escribio en el formulario
    const newStudents = [...this.state.students, newStudent] // --> Creamos un nuevo arreglo en donde hacemo un 'spread' de todos los estudiantes actuales, mas el nuevo estiantes
    event.target.name.value = '' // --> Borramos el input para que quede en blanco
    this.setState({ // --> modificamos el state del componente de forma que ahora students sea igual al nuevo arreglo de estudiantes.
      students: newStudents
    })
  },
  render() {
    return (
      <div>
        <h1>Lista de Estudiantes</h1>
        <form onSubmit={this.handleFormSubmit}> {/* Agregamos el event handler al evento submit del formulario */}
          <input type='text' name='name' placeholder="Nombre del Estudiante" />
          <input type='submit' />
        </form>
        <ul>
          {/* Usando map, creamos un nuevo arreglo en donde cada nombre queda dentro de un li y le ponemos la propiedad 'key' la cual es una propiedad especial de React la cual le ayuda a saber cual elemento es cual dentro de listas. */}
          {this.state.students.map((student, i) => <li key={i}>{student}</li>)}
        </ul>
      </div>
    )
  }
})


////////////////////////////////
//////// UNCONTROL COMPONENTS
////////////////////////////////


// Los dos formualrios anteriores son versiones de componentes 'NO CONTROLADOS', dado que estamos sacando el valor del input del DOM real, de forma que nos saltamos por completo a React y luego estamos reseteando el valor del input directamente en el DOM real para que se mantenga a la par con el estado que queremos en nuestro componente. De forma que ahora el estado del componente no se peude saber con solo mirar su propiedad de estado si no que tambien vive en el DOM real, lo cual puede causar mucho problemas.


////////////////////////////////
//////// CONTROL COMPONENTS
////////////////////////////////

// Podemos mejorar esto creando 'CONTROL COMPONENTS', en los cuales su estado es el unico que dicta la forma en que se va a ver el componente y no dependemos de nada del DOM Real.

// Veamos como podemos cambiar el formulario anterior en un CONTROL COMPONENT

const StudentList = React.createClass({
  getInitialState() {
    return {
      students: [],
      name: '' // --> Creamos una propiedad del estado 'name' en donde vamos a mantener el valor que el usurario escriba en el input
    }
  },
  handleFormSubmit(event) { // --> event handler del formulario
    event.preventDefault() // --> Evitamos que el formulario haga su comportamiento default por que no queremos que recargue la pagina
    const newStudents = [...this.state.students, this.state.name] // --> Aca ahora sacamos el valor del nuevo estudiante del estado donde lo hemos ido almacenando
    this.setState({ // --> modificamos el state del componente de forma que ahora students sea igual al nuevo arreglo de estudiantes y a 'name' para que vuelva a estar en blanco
      students: newStudents,
      name: ''
    })
  },
  handleInputChange(event) {
    const student = event.target.value  // --> sacamos el valor actual del input el cual
    this.setState({
      name: student // --> Modificamos el estado para que tenga el nuevo valor del input
    })
  },
  render() {
    return (
      <div>
        <h1>Lista de Estudiantes</h1>
        <form onSubmit={this.handleFormSubmit}>
          {/* Le ponemos la propiedad value al input la cual va a ser igual al valor de name en el estado. Al Tiempo le ponemos el evento 'onChange' para que cada vez que el usuario escriba ejecutemos ese event handler que va a modificar el estado.*/}
          <input
            type='text'
            placeholder="Nombre del Estudiante"
            value={this.state.name}
            onChange={this.handleInputChange}/>
          <input type='submit' />
        </form>
        <ul>
          {this.state.students.map((student, i) => <li key={i}>{student}</li>)}
        </ul>
      </div>
    )
  }
})


// Ahora bien Igual que la vez pasada tenemos que abstraer la logica para tener un input controlado para que no nos toque crear un event handlre diferente para cada input que tenemos
const BetterStudentsList = React.createClass({
  getInitialState() {
    return {
      students: [],
      fields: {
        name: '',
        email: ''
      } // --> Creamos un objeto llamado 'fields', dentro del cual vamos a ir creando cada uno de los valores de los inputs
    }
  },
  handleFormSubmit(event) { // --> event handler del formulario
    event.preventDefault() // --> Evitamos que el formulario haga su comportamiento default por que no queremos que recargue la pagina
    const newStudents = [...this.state.students, this.state.fields] // --> Ahora students es un arreglo de objetos, lo que queremos hacer es agregarle el objeto que vive en fileds que tiene todas las propiedades de un estudiante
    this.setState({ // --> modificamos el state del componente de forma que ahora students sea igual al nuevo arreglo de estudiantes y a 'fields' para que vuelva a estar en blanco
      students: newStudents,
      fields: {
        name: '',
        email: ''
      }
    })
  },
  handleInputChange(event) {
    const fields = this.state.fields // Aliad para abreviar el path a fields
    fields[event.target.name] = event.target.value // creamos o modificamos la propiedad de fields que sea igual al 'name' del input que disparo el evento y le ponemos como valor el value de ese input
    this.setState({ // --> modificamos el estado para que refleje el nuevo valor de fields
      fields: fields
    })
  },
  render() {
    return (
      <div>
        <h1>Lista de Estudiantes</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input
            name='name'
            placeholder='Nombre del Estudiante'
            value={this.state.fields.name /* --> hacemos la referencia a el value ahoa desde field*/}
            onChange={this.handleInputChange}/>
          <input
            name='email'
            placeholder='Email del Estudiante'
            value={this.state.fields.email}
            onChange={this.handleInputChange}/>
          <input type='submit' />
        </form>
        <ul>
          {this.state.students.map((student, i) => <li key={i}>{student.name}: ({student.email})</li>)}
        </ul>
      </div>
    )
  }
})


////////////////////////////////
//////// Validations
////////////////////////////////

// Para agregar validaciones a nuestro componentes tenemos que hacer varios cambios, estos serian los pasos basicos a seguir:

/*

1. añadir una propiedad en el estado donde podamos almacener los errores si existen,
2. Cambiar render() de forma muestre errores de validacion con texto de color rojo si existen
3. añadir un metodo validate() a nuestro componente que reciba como argumento el objeto 'fields', y devuelva un objeto fieldErrors.
4. cambiar handleFormSubmit para que invoque validate() de forma que obtenga el objeto fildErrors, y si hay errores los añada al estado (para que se puedan ver en render) y se escape de la funcion antes de crear un nuevo estudiante.

*/


// Esta es una estrategia en donde validamos el formulario una vez el usurio hace submit de los datos.
const StudentsListValidation = React.createClass({
  getInitialState() {
    return {
      students: [],
      fieldErrors: {}, // --> Ańadimos un sitio donde podamos poner los errores en el estado
      fields: {
        name: '',
        email: ''
      }
    }
  },
  validate(student) { // --> creamos este metodo para hacer las validaciones necesarias sobre el student
    const errors = {} // --> Creamos el objeto que vamos a devolver
    if (!student.name) {  // --> validamos la presencia
      errors.name = 'Nombre requerido' // Añadimos el error si no hay un nombre
    }
    if (!student.email) {
      errors.email = 'Email requerido'
    }
    // Devolvemos el objeto vacio si no hay errores o con propiedades si si hay
    return errors
  },
  handleFormSubmit(event) {
    event.preventDefault()
    const student = this.state.fields
    const fieldErrors = this.validate(student) // --> Invocamos validate con los valores del formulario (fields) y guardamos en filedErrors el objeto que nos devuelve.
    if (Object.keys(fieldErrors).length) { // Si Fielerrors tiene propiepades quiere decir que hay errores y debemos modificar el estado para añadirlos
      this.setState({ // --> modificamos el estado para poner los errores
        fieldErrors: fieldErrors
      })
      return // Nos salimos de esta funcion en este momento para no crear el student con errores en nuestro estado
    }
    // Si no hay errores podemos añadir el nuevo student
    const newStudents = [...this.state.students, this.state.fields]
    this.setState({ // Modificamos el estado para reflejar todos los cambios
      students: newStudents,
      fieldErrors: {},
      fields: {
        name: '',
        email: ''
      }
    })
  },
  handleInputChange(event) {
    const fields = this.state.fields
    fields[event.target.name] = event.target.value
    this.setState({
      fields: fields
    })
  },
  render() {
    return (
      <div>
        <h1>Lista de Estudiantes</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input
            name='name'
            placeholder='Nombre del Estudiante'
            value={this.state.fields.name }
            onChange={this.handleInputChange}/>
          {/* Agregamos un sitio en rener donde poner errores si estos existen*/}
          <span style={{ color: 'red' }}>{ this.state.fieldErrors.name }</span>
          <br />
          <input
            name='email'
            placeholder='Email del Estudiante'
            value={this.state.fields.email}
            onChange={this.handleInputChange}/>
          <input type='submit' />
          <span style={{ color: 'red' }}>{ this.state.fieldErrors.email }</span>
          <br />
        </form>
        <ul>
          {this.state.students.map((student, i) =>
            <li key={i}>{student.name}: ({student.email})</li>
          )}
        </ul>
      </div>
    )
  }
})

// Ahora miremos una estrategia en donde hacemos las validaciones no a nivel del formulario si no a nivel de cada input de forma que podemos decirle al usuario mientras escribe los valores si estos estan cumpliendo no no las validaciones:


// Para hacer esto vamos a abstraer la logica de crear inputs en un Componente el cual vamos a llmar Field

const Field = React.createClass({
  propTypes: { // --> Aca estanos definiendo las propiedades que este componente puede recibir, esto nos ayuda a identifiacr errores y auto documentar nuestro codigo
    placeholder: React.PropTypes.string,
    name: React.PropTypes.string.isRequired, // --> Aca especificamos que este prop es obligatorio y el componente no puede funcionar si no se lo pasamos
    value: React.PropTypes.string,
    validate: React.PropTypes.func,
    onChange: React.PropTypes.func.isRequired
  },
  getInitialState() {
    return {
      value: this.props.value,  // Tomamos lo que nos pasan en el prop value y creamos estado en base a el, tenemos que hacer esto por que el value es el que nos va a permitir que este sea un CONTROL COMPONENT
      error: false // Esta va a ser la variable del estado que nos indica si el Field tiene un error o no.
    }
  },
  componentWillReceiveProps(update) { // --> Esta es una funcion del Component Life Cycle de React, la cual va a ser invocada cada vez que el componente padre de este componente le pase nuevos props. Los nuevos props son los que estamos recibiendo como la variable 'update', y luego actualizamos el estado para mantener value actualizado.
    this.setState({
      value: update.value
    })
  },
  handleInputChange(event) {
    const name = this.props.name
    const value = event.target.value // --> Sacamos el valor actual que el usuario esta escribiendo
    const error = this.props.validate ? this.props.validate(value) : false // Veirificamos si el padre nos paso un prop validate si si invocamos esa funcion con el valor de value y guardamos lo que devuelve esa funcion en error, en caso de que no nos ayan pasado ese props dejamos el valor de error como false

    this.setState({ value: value, error: error}) // Actualizamos el estado para reflejar el nuevo valor del value del input, y si tiene un error o no,
    this.props.onChange({name: name, value: value, error: error}) //  Llamanos la funcion onChange la cual va a actualizar el estado del component padre que deberia ser el formulario
  },
  render() {
    return(
      <div>
        <input
          placeholder={this.props.placeholder}
          value={this.state.value}
          name={this.props.name}
          onChange={this.handleInputChange}/>
          <span style={{ color: 'red' }}>{ this.state.error }</span>
      </div>
    )
  }
})


// Ya teniendo El componente Field lo podemos usar dentro del componente del formulario
 const StudentsListInputLevelValidation = React.createClass({
  getInitialState() {
    return {
      students: [],
      fieldErrors: {}, // --> Ańadimos un sitio donde podamos poner los errores en el estado
      fields: {
        name: '',
        email: ''
      }
    }
  },
  validate() { // --> creamos este metodo para hacer las validaciones necesarias sobre el student
    const student = this.state.fields
    const fieldErrors = this.state.fieldErrors
    const errMessages = Object.keys(fieldErrors ).filter((key) => fieldErrors[key])

    if (!student.name) return true
    if (!student.email) return true
    if (errMessages.length) return true

    return false
  },
  handleFormSubmit(event) {
    event.preventDefault()
    const student = this.state.fields
    const students = this.state.students

    if (this.validate()) {
      return
    }
    // Si no hay errores podemos añadir el nuevo student
    const newStudents = [...this.state.students, student]
    this.setState({ // Modificamos el estado para reflejar todos los cambios
      students: newStudents,
      fieldErrors: {},
      fields: {
        name: '',
        email: ''
      }
    })
  },
  handleInputChange({name, value, error}) {
    const fields = this.state.fields
    const fieldErrors = this.state.fieldErrors
    fields[name] = value
    fieldErrors[name] = error
    this.setState({
      fields: fields,
      fieldErrors: fieldErrors
    })
  },
  render() {
    return (
      <div>
        <h1>Lista de Estudiantes</h1>
        <form onSubmit={this.handleFormSubmit}>
          <Field
            name='name'
            validate={(val) => val ? false : 'El nombre es requerido'}
            placeholder='Nombre'
            value={this.state.fields.name}
            onChange={this.handleInputChange}/>
          <Field
            name='email'
            validate={(val) => val.toUpperCase() === val ? false : 'El Email tiene que estar todo en mayuscula'}
            placeholder='Nombre'
            value={this.state.fields.email}
            onChange={this.handleInputChange}/>
           <input type='submit' disabled={this.validate()} />
        </form>
        <ul>
          {this.state.students.map((student, i) =>
            <li key={i}>{student.name}: ({student.email})</li>
          )}
        </ul>
      </div>
    )
  }
})

ReactDOM.render(<StudentsListInputLevelValidation />, document.getElementById('react-container'))

