module.exports = {
  entry: './src/app.js',
  output: {
    path: 'dist',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: './dist',
    port: 3000
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style!css', exclude: /node_modules/},
      {test: /\.(jpg|png)$/, loader: 'url', exclude: /node_modules/}
    ]
  }
}
