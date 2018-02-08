/// Tomando paths

var path = require('path')

console.log(`Rock on World from ${path.basename(__filename)}`)


// Lear Carpetas
var files = []
fs.readdir(path.join(__dirname, 'testFiles'), (err,file) => {
  if (err) {
    throw err;
  }
  console.log(file)
})

console.log('Leyendo Archivos....')

// Leer Archivos dentro de carpetas
fs.readdir(path.join(__dirname, 'testFiles'), (err, files) => {
  files.forEach((filename) => {
    var file = path.join(__dirname, 'testFiles', filename)
    var stats = fs.statSync(file)
    if (stats.isFile()) {
      fs.readFile(file,'utf8', (err, file) => {
        console.log(file)
      })
    }
  })
})


// Crear archivos y usar process.argv
var phraseFlag = process.argv.indexOf('--phrase')

var phrase = process.argv[phraseFlag + 1]

fs.writeFile(path.join(__dirname, 'testFiles', 'nestedDirectory', 'sample.md'), phrase, (err) => {
  if (err) throw err
  console.log('Ya quedo')
})

