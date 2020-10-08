import path from 'path';
import { Configuration } from 'webpack';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const outputPath = path.resolve(__dirname, 'dist');
const Dotenv = require('dotenv-webpack');

const config: Configuration = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: outputPath,
    filename: 'bundle.js',
    publicPath: 'dist',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
      {
        test: /\.(sc|c)ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    open: true,
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new Dotenv(),
  ],
};

export default config;
