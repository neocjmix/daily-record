import path from 'path'

const projectRoot = path.resolve(__dirname, '..')
const sourceRoot = path.resolve(projectRoot, 'src')
const assets = path.resolve(projectRoot, 'assets')

const envSuffix = {
  'development': 'dev',
  'production': 'prod',
  'test': 'test',
}[process.env.NODE_ENV]

export default {
  entry: path.resolve(sourceRoot, 'index.js'),
  output: path.resolve(projectRoot, 'dist'),
  htmlTemplate: path.resolve(assets, 'index.html'),
  properties: path.resolve(projectRoot, `config/properties.${envSuffix}.json`),
}
