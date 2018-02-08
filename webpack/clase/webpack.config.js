module.exports = {
  devtool: 'source-maps',
  entry: './app.js',
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
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'url'
      }
    ]
  }
}
