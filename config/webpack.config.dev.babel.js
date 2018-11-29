import paths from './paths.babel'
import properties from './properties.dev'
import webpackCommon from './webpack.config.common.babel.js'

export default {
  ...webpackCommon({ properties, paths }),
  mode: 'development',
  devtool: 'cheap-module-source-map',
}
