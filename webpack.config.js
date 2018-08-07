const path = require('path');
const webpack = require('webpack');
const TSLintPlugin = require('tslint-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new TSLintPlugin({
        files: ['./src/**/*.ts']
    })
  ],
  devServer: {
    contentBase: './dist'
  }
};