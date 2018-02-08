// Modulos que necesitamos requerir

var http = require('http')
var path = require('path')
var fs = require('fs')
var qs = require('querystring');
var mongoClient = require('mongodb').MongoClient

// Para crear un servidor es solo cuestion de usar el metodo createServer()
// createServer recibe un callback como argumento el cual cada vez que llega un request se dispara con argumetnos request y response

mongoClient.connect('mongodb://localhost:27017/node-intro', function(err, db){
  var server = http.createServer(function(req, res){

    // Cada vez que llegue un request podemos mirar que verbo httop tiene y que url pide
    console.log("Response from server started.");
    console.log(`Server Status: ${res.statusCode} `);
    console.log(`${req.method} request for ${req.url}`);

    // Si la url pide el root ejecutamos este codigo
    if (req.method === 'GET') {
      if (req.url === '/') {
        // Seteamos unos headers para enviar con el response
        res.writeHead(200, {"Content-Type": "text/html"})
        // enviamos el contenido
        // res.end(`<p>Hola como estas</p>`)
        // Creamos un strem que lea los contenidos del archivo index.html
        var fileStream = fs.createReadStream(path.join(__dirname, 'index.html'), "UTF-8");
        // por pedazos vamos enviamos ese contenido como respuesta al cliente
        fileStream.pipe(res)
      } else if (req.url === '/students') {
        // Buscamos en la base de datos a todos los estudiantes

        db.collection('students').find().sort({name: 1}).toArray(function(err, students) {
          console.log(students)
          // Enviamos el array de estudiantes al cliente
          res.end(JSON.stringify(students))
        })
      } else if (req.url.match(/\.css$/)) {
        res.writeHead(200, {"Content-Type": "text/css"})
        var fileStream = fs.createReadStream(path.join(__dirname, 'style.css'), "UTF-8");
        fileStream.pipe(res)
      } else if (req.method) {

      } else {
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.end("404 File Not Found");
      }
    } else if (req.method === 'POST') {
      // Si el request es viene con verbo POST
      var body = ""

      // Escuchumos los pedazos de datos que nos llegan
      req.on('data', (data) => {
        console.log(data.toString())
        // vamos guardando cada cosa que nos llega dentro de un string
        body += data
      })

      // Cuando yo nos enviaron todos los datos
      req.on('end', () => {
        // Creamos un objeto usando queryString
        var student = qs.parse(body)
        // Enviamos una respusta de tipo JSON
        res.writeHead(200, {"Content-Type": "text/json"});
        // Volvemos el objeto en un string para poder enviarlo
        db.collection('students').insertOne(student, function(err, response){
          res.end(JSON.stringify(student))
        })
      })
    }

  })
  // Prendemos el servidor para que oiga todos los request que lleguen al puerto 3000
  server.listen(3000)
  console.log('Servidor prendido en el puerto 3000')
})
