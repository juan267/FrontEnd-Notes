/////////////////////////////////////////////////////////
///// INTRO A JSX /////////
/////////////////////////////////////////////////////////


// React.createElement , crea un ReactNode que es el nodo que representa un node real del DOM en el Virtual DOM

//React.createElement(Accepta 3 argumentos:)

//1. The DOM element type ej: 'div', 'ul', 'li', 'a', 'span' O un component de React
//2. The element props ej: 'id', 'className', 'href', 'src', 'name'
//3. The children of the element: Los elementos que van a ir dentro de este Tag
///// Ej:
//<ul>
//  <li></li>  < --- Todos estos 'li' son los children del 'ul'
//  <li></li>
//  <li></li>
//</ul>
// El argumeto que se le pase a children solo es valido con uno de estos 3 valores:
// 1. ReactElement, Otro Reac.createElement()
// 2. A string or a number
// 3. An array of ReactNodes


// El punto de JSX es ayudarnos a escribir la herarquia de elementos de React osea cada cosa que creamos con React.createElement() en una syntaxis mas facil de usar. El equipo de react se dio cuenta de que HTML es el lenguaje perfecto para representar una heraquia de Elementos por los cual JSX se ve casi igual a HTML/XMl. Esto nos da la gran ventaje de que podemosmexclar Javascript con el Markup que escribimos en JSX. En otras palabras agregar logica a nuestras vistas.


// Estos dos son equivalentes
const boldElement = React.createElement('b', null, 'This is a bold Element')]

const boldElementJSX = (<b>This is a bold Element</b>)

// Estos dos son equivalents tambien y tienen props y childrens
const ulList = React.createElement('ul', {id: 'dog-list'},
  React.createElement('li', {id: 'doberman'}, 'Soy un Frenchie'),
  React.createElement('li', {id: 'bulldog'}, 'Soy un bulldog'),
  React.createElement('li', {id: 'criollo'}, 'Soy un criollo'),
  React.createElement('li', {id: 'doberman'}, 'Soy un doberman'),
)

const ulListJSX = (
  <ul id="dog-list">
    <li id="frenchie">Soy un Frenchie</li>
    <li id="bulldog">Soy un bulldog</li>
    <li id="criollo">Soy un criollo</li>
    <li id="doberman">Soy un doberman</li>
  </ul>
)

// Una diferencia entre los tags de HTML y los componentes de React esta en la forma en la que les damos nombres:

///// HTML tag  Aca el nombre htmlElement empieza sin Mayuscula por que un div es un elmento nativo de HTML:

const htmlElement = (<div>Hola Mundo</div>)

// Este se puede usar de la siguiente manera
<htmlElment /> // -> esto va a crear un div que por dentro dice 'hola mundo' nota que la primera letra esta minuscula

///// En un componente personalizado de React que nosotros creemos la primera letra SIEMPRE va en mayuscula:

const Message = React.creatClass({ // -> Nota que Message empieza con mayuscula
  render() {
    return (
      <div>{this.props.text}</div>
      {this.props.children} /// --> Hola mundo
    )
  }
})

// Este component Message lo podemos usar de la siguiente manera:

<Message text='Hola mundo'/> // -> aca estamos invocando ese componente y pasandole un `prop` llamado `text` con el valor 'hola mundo'.


/////////////////////////////////////////////////////////
///// USO AVANZADO de JSX /////////
/////////////////////////////////////////////////////////


/////////////
//// JSX Attribute Expressions:
/////////////


// Para poder usar una expresion de javascript en los props/atributos de un componente tenemos que envolverla en {} ej:

const warningLevel = 'debug'



const AlertComponent = (
  <Alert
    color={warningLevel === 'debug' ? 'gray' : 'red'}
    log={true} />)

// Aca estamos invocando/Renderizando un componente Alert al cual le pasamos el prop/atributo `color`. El valor de 'color' es una expresion de javascript (un operador ternario) el cual va a setear el valor de 'color' dependiendo de la variable 'warningLevel'.



/////////////
//// JSX Conditional Child Expressions
/////////////


// Creamos un componente que crea los links del menu
const MenuLink = React.createClass({
  /// Cosas de este componente
})

// Creamos el component Menu el cual crea el menu que esta compuesto de muchos MenuLink
const Menu = React.createClass({
  render() {
    // Creamos una funcion que que devuelve un MenuLink con link a las cuentas de usuario
    const renderAdminMenu = () => {
      return (<MenuLink to='/users'>User Account</MenuLink>)
    }
    // Miramos en la propiedad del componente que valor tiene el userRole
    const userRole = this.props.userRole
    return (
      <ul>
        {/*Este MenuLink lo pueden ver todos los usuarios */}
        <MenuLink to="/blog"></MenuLink>
        {/* Si el user role es igual a 'admin' ponga el MenuLink que si pueden ver los admins*/}

        {userRole === 'admin' && renderAdminMenu()}
      </ul>
    )
  }
})

<ul>{loggedInUser ? <UserMenu /> : <LoginLink />

/// Creamos menus y le pasamos diferentes valores para userRole
<Menu userRole='admin'/> // Este va a mostrar el Menulink a los User Accounts
<Menu userRole='user'/>  // Este no


// Tambien podemos usar un operador ternario para condicionalmente hacer un render de un component u otro:

// Aca estamos creando un 'ul' el cual va a tener como children un UserMenu si el usuario esta loggeado o un LoginLink si no
const loggedInUser = true || false
const Menu = (<ul>{loggedInUser ? <UserMenu /> : <LoginLink />}</ul>)


/////////////
////JSX Boolean Attributes
/////////////


// En html podemos poner atributos dentro de tags que por solo ponerlos infieren que su valor es true ej:

<input name='Name'  required checked />

// en JSX tenenmos que explicitamente decirle el valor del Booleano

// Poner el booleano directamente
<input name='Name' disabled={true} />

// O con una variable de javascript
let formDisabled = true;
<input name='Name' disabled={formDisabled} />



/////////////
////JSX Comments
/////////////

// Podemos crear comentarios dentro de JSX al usar {} con delimitadores de comentarios /* */ por dentro

let userLevel = 'admin';
{/*
3 Show the admin menu if the userLevel is 'admin'
4 */}
{userLevel === 'admin' && <AdminMenu />}


/////////////
////JSX Cascaritas
/////////////


// class y className

// Lo mismo que -->  <div class='box'></div>
<div className='box'></div>

// for y htmlFor

// Usamos htmlFor en vez de for
<label htmlFor='email'>Email</label>
<input name='email' type='email' />





// Recursos

// JSX IN DEPTH: https://facebook.github.io/react/docs/jsx- in- depth.html 41https://facebook.github.io/react/tips/if- else- in- JSX.html
// IF ELSE en JSX: https://facebook.github.io/react/tips/if-else-in-JSX.html
// QUE ES EL VIRTUAL DOM: http://jbi.sh/what- is- virtual- dom/



ReactDOM.render(ulListJSX, document.getElementById('react-container'))





