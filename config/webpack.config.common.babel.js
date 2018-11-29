import HtmlWebpackPlugin from 'html-webpack-plugin'
import DirectoryNamedWebpackPlugin from 'directory-named-webpack-plugin'

export default ({ properties, paths }) => ({
  entry: {
    index: paths.entry,
  },
  resolve: {
    alias: {
      properties: paths.properties,
    },
    plugins: [
      new DirectoryNamedWebpackPlugin(true),
    ],
  },
  output: {
    path: paths.output,
    filename: '[name].[contenthash].js',
  },
  module: {
    rules: [
      // lint
      {
        test: /\.(js|mjs|jsx)$/,
        enforce: 'pre',
        use: [{
          options: {
            parser: 'babel-eslint',
            formatter: require.resolve('react-dev-utils/eslintFormatter'),
            emitWarning: true,
          },
          loader: require.resolve('eslint-loader'),
        }],
        exclude: /node_modules/,
      },

      // babel
      {
        test: /\.(js|mjs|jsx)$/,
        loader: require.resolve('babel-loader'),
        exclude: /node_modules/,
      },

      // sass
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: properties.appName,
      template: paths.htmlTemplate,
    }),
  ],
  devServer: {
    noInfo: true,
    open: true,
  },
})
