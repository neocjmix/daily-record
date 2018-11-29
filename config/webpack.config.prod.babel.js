import paths from './paths.babel'
import properties from './properties.prod'
import webpackCommon from './webpack.config.common.babel.js'

export default {
  ...webpackCommon({ properties, paths }),
  mode: 'production',
}
