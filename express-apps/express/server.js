var express = require('express')
var engine = require('express-handlebars')
var bodyParser = require('body-parser')
var mongoClient = require('mongodb').MongoClient
var ObjectID = require('mongodb').ObjectID

var app = express()

/// Configuracion
app.use('/public', express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}))
app.engine('handlebars', engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views')


mongoClient.connect('mongodb://localhost:27017/students', function(err, db) {

  app.get('/', function(req, res) {
    res.render('students/index')
  })

  //// NEW
  app.get('/students/new', function(req, res) {
    res.render('students/new')
  })

  //// EDIT
  app.get('/students/:id/edit', function(req, res) {
    db.collection('students').findOne(ObjectID(req.params.id), function(err, student) {
      if (err) {
        throw err
      }
      res.render('students/edit', {student: student})
    })
  })


  ////UPDATE
  app.post('/students/:id/update', function(req, res) {
    db.collection('students').updateOne({_id: ObjectID(req.params.id)}, {name: req.body.name, age: req.body.age}, function(err, result) {
      res.redirect('/students')
    })
  })

  /// CREATE
  app.post('/students', function(req, res) {
    db.collection('students').insertOne({
      name: req.body.name,
      age: req.body.age
    }, function(err, result) {
      if (err) {
        throw err
      }
      res.redirect('/students')
    })
  })

  //// INDEX
  app.get('/students', function(req, res) {
    db.collection('students').find().toArray(function(err, students) {
      // res.send(students)
      res.render('students/index', {students: students})
    })
  })


  app.listen(3000)
  console.log('Server listening port 3000')

})

