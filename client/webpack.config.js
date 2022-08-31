const path = require('path');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

const isProd = process.env.NODE_ENV === 'production';

const filenameWithHash = (name, extension) => `${name}.[hash].${extension}`;

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src/index.tsx')
  },
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: '[name].[hash].js',
    clean: true
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.scss'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@styles': path.resolve(__dirname, 'src/assets/styles'),
      '@layouts': path.resolve(__dirname, 'src/layouts'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@atoms': path.resolve(__dirname, 'src/components/atoms'),
      '@molecules': path.resolve(__dirname, 'src/components/molecules'),
      '@organisms': path.resolve(__dirname, 'src/components/organisms'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@api': path.resolve(__dirname, 'src/api'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@routes': path.resolve(__dirname, 'src/routes')
    }
  },
  optimization: {
    minimizer: [new TerserWebpackPlugin()]
  },
  devServer: {
    port: '8080',
    historyApiFallback: true
  },
  devtool: 'eval-cheap-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react']
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.ts(x?)$/,
        use: {
          loader: 'ts-loader'
        },
        exclude: /node_modules/
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      },
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        GITHUB_API_URL: JSON.stringify(
          'https://api.github.com/graphql' || process.env.GITHUB_API_URL
        ),
        GITHUB_CLIENT_ID: JSON.stringify('Iv1.da154f760a9b22b7' || process.env.GITHUB_CLIENT_ID),
        GITHUB_CLIENT_SECRET: JSON.stringify(
          'e606c3bf9b5bd16a4ad461cd6af8ba41e2437664' || process.env.GITHUB_CLIENT_SECRET
        )
      }
    }),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      minify: {
        removeComments: isProd
      }
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public/favicon.ico'),
          to: path.join(__dirname, '..', 'dist')
        },
        {
          from: path.resolve(__dirname, 'public/manifest.json'),
          to: path.join(__dirname, '..', 'dist')
        }
      ]
    }),
    new MiniCssExtractPlugin({
      filename: filenameWithHash('bundle', 'css')
    })
  ]
};
