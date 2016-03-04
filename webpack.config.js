
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './main.js',

  output: {
    path: __dirname + '/dist',
    filename: 'build.js'
  },

  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.(woff|woff2)(\?.*)?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.ttf(\?.*)?$/,
        loader: "file-loader"
      },
      {
        test: /\.eot(\?.*)?$/,
        loader: "file-loader"
      },
      {
        test: /\.svg(\?.*)?$/,
        loader: "file-loader"
      }
    ]
  },

  vue: {
    css: ExtractTextPlugin.extract("css"),
    less: ExtractTextPlugin.extract("css!less")
  },

  plugins: [
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
    }),

    new ExtractTextPlugin("style.css"),

    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: true
    })
  ]
};
