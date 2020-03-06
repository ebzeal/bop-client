const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rules = [
  {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader'
    }
  },
  {
    test: /\.css$/,
    use: [
      {
        loader: 'style-loader'
      },
      {
        loader: 'css-loader',
        options: {
          modules: true,
          localIdentName: '[name]_[local]_[hash:base64]'
        }
      }
    ]
  },
  {
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader']
  },
  {
    test: /\.(png|jpe?g|gif|svg|ico)$/i,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 8192
        }
      }
    ]
  }
];

module.exports = {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  mode: process.env.NODE_ENV || 'development',
  module: {
    rules
  },
  devServer: {
    port: 4500,
    historyApiFallback: {
      disableDotRule: true
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      favicon: 'public/images/favicon.ico'
    })
  ],
  resolve: { extensions: ['.ts', '.js', '.tsx', '.jsx'] }
};
