/**
 * Created by arrtem on 2/10/17.
 */
const buildDir = "/dist";
module.exports = {
  context: __dirname + "/app",

  entry: {
    app: ["./js/index.js", "./index.html", "./styles/main.css"]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["react-hot-loader", "babel-loader"]
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loaders: ["file-loader?name=[name].[ext]"]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: ["file-loader?name=[name].[ext]"]
      }
    ]
  },
  output: {
    filename: "[name].js",
    path: __dirname + buildDir
  }
};
