module.exports = {
  entry: './src/main.js', // El archivo de entrada, este archivo actua como el root de todo nuestro proyecto webpack va a crear todo el arbol de dependencias siguiendo las dependencias de este archivo y sus dependencias.
  output: { // La carpeta y nombre del archivo donde webpack va a escupir todo el codigo de nustra aplicacion ya agrupado en un solo archivo listo para que el naveegador consuma.
    path: './build', // Path a la carpeta de produccion
    filename: 'bundle.js' // Nombre del archivo a crear
  }
}
