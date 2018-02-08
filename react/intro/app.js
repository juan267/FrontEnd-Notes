// console.log('Hola React')

/// React Puro
// const Algo = React.createClass({
//   render() {
//     return (
//       React.createElement('div', {style: styles.container},
//         React.createElement('h1', null, `Hola como`),
//         React.createElement('h2', null, 'Soy el segundo h2'),
//         React.createElement('div', null,
//           React.createElement('p', {style: styles.interiorP}, 'Soy el p interior'),
//           React.createElement('p', null, 'Soy el Segundo p interior')
//         )
//       )
//     )
//   }
// })


//////// Esto es JSX
// const Algo = React.createClass({
//   render() {
//     return(
//       <div >
//         <h1>{this.props.text}</h1>
//         <h2>Soy el segundo H2</h2>
//         <div>
//           <p>Soy el p interior</p>
//           <p>Soy el segundo p interior</p>
//         </div>
//       </div>
//     )
//   }
// })


// ReactDOM.render(<Algo text='Vengo de aca' />, document.getElementById('react-container'))

// const color = true

// const styles = {
//   container: {
//     color: 'green'
//   },
//   interiorP: {
//     color: 'red'
//   }
// }

// const Todo = React.createClass({
//   render() {
//     const index = this.props.index
//     return(
//       React.createElement('div', null,
//         React.createElement('p', null, this.props.text),
//         React.createElement('button', {onClick: this.props.deleteTodo.bind(this,index)}, 'Borrar')
//       )
//     )
//   }
// })


// const Todolist = React.createClass({
//   getInitialState() {
//     return {
//       todos: ['Primer todo', 'Segundo Todo', 'Tercer Todo']
//     }
//   },
//   deleteTodo(index, event) {
//     console.log(index, event)
//     this.state.todos.splice(index, 1)
//     this.setState({
//       todos: this.state.todos
//     })
//   },
//   handleSubmit(event) {
//     event.preventDefault()
//     console.log(event.target.todoItem.value)
//     const newTodos = [...this.state.todos, event.target.todoItem.value]
//     this.setState({
//       todos: newTodos
//     })
//   },
//   render() {
//     return (
//       React.createElement('div', null,
//         React.createElement('ul', null,
//           this.state.todos.map((todo, index) => {
//             return React.createElement(Todo, {text: todo, deleteTodo: this.deleteTodo, index: index })
//           })
//         ),
//         React.createElement('form', {onSubmit: this.handleSubmit},
//           React.createElement('input', {type: 'text', name: 'todoItem'}),
//           React.createElement('input', {type: 'submit', value: 'Crear Todo'})
//         )
//       )
//     )
//   }
// })




// const Hola = React.createClass({
//   render() {
//     return (
//       React.createElement('div', null,
//         React.createElement('h1', null, `Hola como ${this.props.name}`),
//         React.createElement('h2', null, 'Soy el segundo h2'),
//         React.createElement('div', null,
//           React.createElement('p', null, 'Soy el p interior'),
//           React.createElement('p', null, 'Soy el Segundo p interior')
//         )
//       )
//     )
//   }
// })
///////

/////// Usando JSX
// const Hola = React.createClass({
//   render() {
//     return (
//       <div>
//         <h1>Hola como estas {this.props.name}</h1>
//         <h2>Soy el segundo h2</h2>
//         <div>
//           <p>Soy el p interior</p>
//           <p>Soy el segundo p interior</p>
//         </div>
//       </div>
//     )
//   }
// })
///////


const Todo = React.createClass({
  render() {
    return(
      React.createElement('div', null,
        React.createElement('p', null, this.props.text),
        React.createElement('button', {onClick: this.props.deleteTodo.bind(this, this.props.index)}, 'Borrar')
      )
    )
  }
})


function ajaxRequest(callback) {
  setTimeout(() => {
    callback(['tender la cama', 'sacar el perro', 'comer'])
  }, 2000)
}

const TodosList = React.createClass({
  getInitialState() {
    return {
      todos: [],
      loading: true
    }
  },
  componentDidMount() {
    ajaxRequest((data) => {
      this.setState({
        todos: data,
        loading: false
      })
    })
  },
  createTodo(event) {
    event.preventDefault()
    const newTodos = [...this.state.todos, event.target.todo.value]
    this.setState({
      todos: newTodos
    })
  },
  deleteTodo(index, event) {
    this.state.todos.splice(index, 1)
    this.setState({
      todos: this.state.todos
    })
  },
  render() {
    if (this.state.loading) {
      return React.createElement('h1', null, '...Loading')
    } else {
      return (
        React.createElement('div', {style: styles.container},
          React.createElement('ul', {style: styles.ul},
            this.state.todos.map((todo, index) => {
              return React.createElement('li', null, React.createElement(Todo, {text: todo, deleteTodo: this.deleteTodo, index: index}))
            })
          ),
          React.createElement('form', {onSubmit: this.createTodo},
            React.createElement('input', {type: 'text', name: 'todo'}),
            React.createElement('input', {type: 'submit', value: 'Crear Todo'})
          )
        )
      )
    }
  }
})

const styles = {
  container: {
    display: 'flex',
    color: 'green',
    // flexDirection: 'column',
    // alignContent: 'center',
    justifyContent: 'center'
  },
  ul: {
    textAlign: 'center',
    'listStyle': 'none'
  }
}


ReactDOM.render(React.createElement(TodosList, null), document.getElementById('react-container'))


