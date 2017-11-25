var ExtractTextPlugin = require('extract-text-webpack-plugin');
var StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: ['babel-loader', 'eslint-loader']
    },
    {
      test: /\.css/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          { loader: 'css-loader', options: { modules: true, importLoaders: 1, localIdentName: '[name]__[local]___[hash:base64:5]' } },
          { loader: 'postcss-loader' }
        ]
      })
    }]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  plugins: [
    new StyleLintPlugin({configFile: '.stylelintrc', files: 'src/**/*.css' }),
    new ExtractTextPlugin("style.css")
  ]
};
