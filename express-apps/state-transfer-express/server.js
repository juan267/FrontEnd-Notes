var express = require('express')
var engine = require('express-handlebars')
var bodyParser = require('body-parser')

var app = express()
app.engine('handlebars', engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views')
app.use(bodyParser.urlencoded({extended: true}))


app.get('/', function(req, res) {
  var name = req.query.name
  res.render('index',{
    name: name
  })
})

app.post('/', function(req, res) {
  var name = req.body.name
  res.render('index',{
    name: name,
  })
})

app.get('/:name', function(req, res) {
  var nameParams = req.params.name
  var age = req.params.age
  res.render('index',{
    nameParams: nameParams,
    age: age
  })
})

app.get('/:name/:age', function(req, res) {
  var nameParams = req.params.name
  var age = req.params.age
  res.render('index',{
    nameParams: nameParams,
    age: age
  })
})

///  PARAMS

// '/students/:id'
// '/students'

// '/students/758290834578'
// var params = {
//   id: 758290834578
// }

// params.id = 758290834578

/// QUERY STRING

// var query = {
//   status: 'active'
// }


// var params = {
//   id: _____
// }
// req.query.status


app.listen(3000)
console.log('Server listening port 3000')
