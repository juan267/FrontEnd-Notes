var express = require('express')
var bodyParser = require('body-parser')
var mongoClient = require('mongodb').MongoClient
var ObjectId = require('mongodb').ObjectID
var engine = require('express-handlebars')
var bcrypt = require('bcrypt');
var session = require('express-session')

var app = express()

/// Configuracion
app.use('/public', express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({extended: true}))
app.engine('handlebars', engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.set('views', __dirname + '/views')

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}))


// Access the session as req.session
mongoClient.connect('mongodb://localhost:27017/students', function(err, db) {

  // Middleware
  app.use(function(req, res, next) {
    if (req.session.studentId) {
      db.collection('students').findOne(ObjectId(req.session.studentId), function(err, student) {
        req.student = student
        next()
      })
    } else {
      next()
    }
  })


  /// Students Routes
  app.get('/', function(req, res, next) {
    // console.log(req.student)
    db.collection('students').find().toArray(function(err, students) {
      res.render('index', {
        students: students,
        currentUser: req.student
      })
    })
  })

  app.get('/students/new', function(req, res) {
    res.render('students/new')
  })

  app.post('/students', function(req, res) {
    var student = req.body.student
    bcrypt.hash(student.password, 8, function(err, hash) {
      student.password = hash
      db.collection('students').insertOne(student, function(err, result){
        if (err) {
          res.render('students/new', {error: 'Email ya existe'})
          return
        }
        req.session.studentId = student._id
        res.redirect('/')
      })
    });
  })

  /////Sesssion routes
  app.post('/sessions/delete', function(req, res) {
    req.session.studentId = null
    res.redirect('/')
  })

  app.post('/sessions', function(req, res) {
      db.collection('students').findOne({email: req.body.email}, function(err, student){
      if (student) {
        bcrypt.compare(req.body.password, student.password, function(err, valid) {
          if (valid) {
            req.session.studentId = student._id
            res.redirect('/')
          } else {
            res.render('sessions/new', {error: 'Wrong Password'})
          }
        })
      } else {
        res.render('sessions/new', {error: 'Wrong Email'})
      }
    })
  })

  app.get('/sessions/new', function(req, res) {
    res.render('sessions/new')
  })

})

app.listen(3000)
