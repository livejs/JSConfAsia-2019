const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");

const ROOT = __dirname;
const DOCS = path.resolve(ROOT, "docs");

module.exports = {
  entry: {
    bundle: "./src/index.js"
  },
  output: {
    path: DOCS,
    filename: "[name].js",
    libraryTarget: "umd"
  },
  mode: process.env.NODE_ENV || "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {}
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: DOCS,
    compress: false,
    historyApiFallback: true,
    hot: true,
    port: 8083
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "WebUSB for Digital Artists",
      filename: "index.html",
      template: "src/index.html",
      alwaysWriteToDisk: true,
      minify: {
        collapseWhitespace: true,
        html5: true,
        minifyCSS: true,
        quoteCharacter: '"',
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        sortClassName: true,
        sortAttributes: true,
        useShortDoctype: true
      }
    }),
    new HtmlWebpackHarddiskPlugin({
      outputPath: DOCS
    })
  ]
};
