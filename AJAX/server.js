const express = require('express')
const bodyParser = require('body-parser')
const engine = require('express-handlebars')

const app = express()


// Configuracion
app.use('/public', express.static(`${__dirname}/public`))
app.use(bodyParser.urlencoded({extended: true}))
app.engine('handlebars', engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views')

var todos = [
  {todoItem: "Lavar los platos"},
]


app.get('/', function(req, res) {
  res.render('index', {todos: todos})
})

app.post('/todos', function(req, res) {
  todos.push({todoItem: req.body.todoItem})
  // res.redirect('/')
  res.render('partials/todos', {todos: todos, layout: false})
})

app.get('/todos/:id/delete', function(req, res) {
  todos.splice(req.params.id, 1)
  // res.redirect('/')
  res.json(todos)

})


/// Start server
app.listen(3000, () => console.log('server listening port 3000'))








//// Fake db

// const todos = [
//   {
//     todoItem: 'Apple'
//   }
// ]


/// Routes
// app.get('/', (req, res) => {
//   res.render('index', {todos: todos})
// })

// app.post('/todos', (req, res) => {
//   todos.push({todoItem: req.body.todoItem})
//   // res.send(todos)
//   res.render('partials/todos', {todos: todos, layout: false})
// })

// app.get('/todos/:id/delete', (req, res) => {
//   todos.splice(req.params.id, 1)
//   res.render('partials/todos', {todos: todos, layout: false})
// })
