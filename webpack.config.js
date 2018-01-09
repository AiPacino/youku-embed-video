module.exports = {
  module: {
    preLoaders: [{
      test: /\.js$/,
      loader: "eslint",
      exclude: /node_modules/
    }],
    loaders: [{
      test: /\.js$/,
      loader: "babel",
      exclude: /node_modules/
    }]
  },
  entry: './src/youku.js',
  output: {
    filename: "youku.js",
    path: "./dist",
    library: "YoukuEmbedVideo",
    libraryTarget: "commonjs2"
  },
  externals: {
    "react": "react",
    "react-dom": "react-dom"
  },
  devtool: "source-map"
};
