var http = require('http')
var fs = require('fs')
var path = require('path')
var qs = require('querystring');
var student = require('./student')

var server = http.createServer(function(req, res){
  console.log("Response from server started.");
  console.log(`Server Status: ${res.statusCode} `);
  console.log(`${req.method} request for ${req.url}`);


  if (req.method === "GET") {
    if (req.url === '/') {
      res.writeHead(200, {"Content-Type": "text/html"})
      fs.readFile(path.join(__dirname, 'index.html'), function(err, file){
        var file = file.toString().trim()
        res.end(file)
      })
    } else if (req.url.match(/\.css$/)) {
      res.writeHead(200, {"Content-Type": "text/css"})
      fs.readFile(path.join(__dirname, 'style.css'), function(err, file){
        var file = file.toString().trim()
        res.end(file)
      })
    } else if (req.url.match(/\.jpg$/)) {
      res.writeHead(200, {"Content-Type": "image/jpeg"});
      fs.readFile(path.join(__dirname, req.url), function(err, file){
        res.end(file)
      })
    }
  } else if (req.method === "POST") {
    var body = ''
    req.on('data', function (chunks){
      body += chunks.toString()
    })

    req.on('end', function() {
      var newStudent = qs.parse(body)
      student.createStudent(newStudent.name, newStudent.age)
      res.end(JSON.stringify(newStudent))
    })
    // console.log(student.createStudent())
  }
})

server.listen(3000)
console.log('Sevidor escuchando en puerto 3000')

// http:\\localhost:3000
