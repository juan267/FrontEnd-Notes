
// Enviando una respuesta en forma de HTML

const http = require('http')

const server = http.createServer((req, res) => {
  // all requests go in here for all routes
  res.writeHead(200, {content_type: 'text/plain'})

  res.end(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>Document</title>
      </head>
      <body>
        <h1>Hola como estas</h1>
        <p>${req.url}</p>
        <p>${req.method}</p>
      </body>
    </html>
  `)
})

server.listen(3000)

console.log('server listening on port 3000')


/// Sirviendo archivos estaticos
const http = require('http')
const path = require('path')
const fs = require('fs')

http.createServer((req, res) => {
  console.log(`${req.method} for ${req.url}`)

  if (req.url === '/') {
    fs.readFile(path.join(__dirname, 'public', 'index.html'), 'UTF-8', (err, html) => {
      res.writeHead(200, {'Content-Type': 'text/html'})
      res.end(html)
    })
  } else if (req.url.match(/\.css$/)) {
    res.writeHead(200, {'Content-Type': 'text/css'})
    var cssFileStream = fs.createReadStream(path.join(__dirname, 'public', req.url), 'UTF-8')
    cssFileStream.pipe(res)
  } else if (req.url.match(/\.jpg$/)) {
    res.writeHead(200, {'Content-Type': 'image/jpeg'})
    var imageFileStream = fs.createReadStream(path.join(__dirname, 'public', req.url))
    imageFileStream.pipe(res)
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'})
    res.end('Content not found')
  }
}).listen(3000)

console.log('Server running on port 3000')
