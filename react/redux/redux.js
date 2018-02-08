/////////////////////////////////////////////////////////
///// Redux /////////
/////////////////////////////////////////////////////////

// Redux es una implentacion de Flux. Flux es una filosofia de como hacer la arquitectura de datos de una aplicacion.

// La arquitectura flux, esta compuesta por 4 partes.

// - Acciones,
// - Dispatcher
// - Store
// - View

// La vista despacha acciones, que describen que sucedio con la aplicacion, El store recibe estas acciones y determina que cambios en el estado deben suceder. Depues de que el estado se actualize, este es empujado a la vista para que haga un rerender con el nuevo estado.

// Redux es la implementacion mas popular de esta arquitectura.

// Ideas claves de Redux:

/*
- Todo los datos de la aplicacion son una solo estructura la cual esta almacenada en un store

- La aplicacion lee el estado del store

- Las vistas emiten acciones que describen cosas que sucenden

- Un nuevo estado es creado al combinar el viejo-estado con la accion en una funcion llamada *reducer*
*/


// Ejemplos sobre un reducer en una aplicacion que lo que hace es incrementar o reducir un contador

function reducer(state, action) { // recibe tanto el estado actual como, la accion
  if (action.type === 'INCREMENT') { // miramos el tipo de la accion
    return state + action.amount
  } else if (action.type === 'DECREMENT') {
    return state - action.amount
  } else {
    return state
  }
}

function createStore(reducer) {
  let state = 0 // privada a createStore pero con un clousere para mantener el valor

  const getState = () => {
    return state
  }

  const dispatch = (action) => {
    state = reducer(state, action)
  } // fire and forget

  return {
    getState,
    dispatch
  }
}

// const incrementAction = {type: 'INCREMENT'}
// const decrementAction = {type: 'DECREMENT'}
// const nonAction = {type: 'dfas'}
// console.log(reducer(5, incrementAction))
// console.log(reducer(3, incrementAction))
// console.log(reducer(4, decrementAction))
// console.log(reducer(4, nonAction))

//Usando createStore creamos un store el cual recibe el reducer, este objeto nos va a servir para despachar accciones las cuales modifican el estado, y podemos usar getState para preguntarle cual es el estado actual.

const store = createStore(reducer)

const incrementAction = {
  type: 'INCREMENT',
  amount: 3
}

store.dispatch(incrementAction)
console.log(store.getState() === 3) // -> 3
store.dispatch(incrementAction)
console.log(store.getState() === 6) // -> 6

const decrementAction = {
  type: 'DECREMENT',
  amount: 4
}

store.dispatch(decrementAction)
console.log(store.getState() === 2) // -> 2

// Repasemos las ideas claves de Redux:

/*
1. Todos los datos de nuestra apliacion viven en una estrucutura de datos llamada el state el cual vive dentro del store.
2. El store tiene una sola variable llamada el state, la aplicacion lee el estado del store.
3. Usamos getState() para acceder al valor del estado.
4. Como el state es una variable privada, no puede ser ser mutada por fuera del store.
5. Las vistas emiten acciones que describen que paso.
6. Usamos dispatch para mandar estas acciones al store
7. Un nuevo estado se crea al combinar el estado anterior con con la accion en una funcion llamada el reducer
8. Dentro de dispatch(), el store usa reducer() para crear un nuevo estado, pasando el estado actual y la accion
9. los Reducers deben ser funciones puras
*/


