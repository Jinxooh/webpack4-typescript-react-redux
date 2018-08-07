const path = require("path");
const webpack = require("webpack");
const TSLintPlugin = require("tslint-webpack-plugin");

module.exports = {
   entry: [
    'react-hot-loader/patch', // activate HMR for React
    'webpack-dev-server/client?http://localhost:8080',// bundle the client for webpack-dev-server and connect to the provided endpoint
    'webpack/hot/only-dev-server', // bundle the client for hot reloading, only- means to only hot reload for successful updates
    './src/index.tsx' // the entry point of our app
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'ts-loader'],
      },
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle.js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
    new webpack.NamedModulesPlugin(), // prints more readable module names in the browser console on HMR updates
    // new TSLintPlugin({
    //   files: ["./src/**/*.ts"]
    // })
  ],
  devServer: {
    hot: true, // enable HMR on the server
    contentBase: "./dist",
  },
  devtool: 'cheap-module-eval-source-map',
};
