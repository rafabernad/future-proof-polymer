const path = require('path');

const isDev = process.argv.find(arg => arg.includes('webpack-dev-server'));
const outputPath = path.join(__dirname, '..', 'src');

module.exports = {
  entry: './src/index.js',
  devtool: 'cheap-module-source-map',
  cache: true,
  output: {
    path: outputPath,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // We need to transpile Polymer itself and other ES6 code
        // exclude: /(node_modules)/,
        use: 'babel-loader'
      },
      {
        test: /\.html$/,
        use: ['text-loader', 'postcss-html-loader']
      },
      {
        test: /\.postcss$/,
        use: ['text-loader', 'postcss-loader']
      }
    ]
  },
  resolve: {
    alias: {
      '@demo/decorators': path.resolve(__dirname, '..', 'decorators')
    }
  },
  devServer: {
    contentBase: [outputPath, path.resolve(__dirname, '..', 'node_modules')],
    compress: true,
    overlay: {
      errors: true
    },
    port: 3000
  }
};
