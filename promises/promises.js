
// function action(callback) {
//   setTimeout(function() {
//     callback('Hola')
//   }, 2000)
// }



// action(function(arg){
//   args.later(function() {

//   })
// })

// action().then(function(args){})

// function action(callback) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve('holaaa')
//     }, 2000)
//   })
// }

// action()
//   .then(function(word) {
//     console.log(word)
//     return word
//   })
//   .then(function(word) {

//   })
//   .then()
//   .catch(function(err) {

//   })
//   .finally()


var fs = require('fs')

// fs.readFile(filePath, function(err, file) {
//   console.log(file)
// })

// MyreadFile('test.md')
//   .then(function(file) {

//   })
//   .cath(function(err) {
//     console.log(err)
//   })



function MyreadFile(filePath) {
  return new Promise(function(resolve, reject) {
    fs.readFile(filePath, function(err, file) {
      return err ? reject(err) : resolve(file.toString().trim())
    })
  })
}

function readAllFiles() {
  var promises = [MyreadFile('test.md'), MyreadFile('test.md'), MyreadFile('test.md')]
  return Promise.all(promises)
}

readAllFiles()
  .then(function(files) {
    console.log(files)
    const UpperFiles = files.map((file) => {
      return file.toUpperCase()
    })
    return UpperFiles
  })
  .then(function(UpperFiles) {
    console.log(UpperFiles)
  })
  .catch(function(err) {
    console.log(err)
  })

// readFile('test.md')
//   .then(function(file) {
//     console.log(file)
//     return 'Hey'
//   })
//   .then(function(word) {
//     console.log(word)
//   })
//   .catch(function(err){
//     console.log(err)
//   })




