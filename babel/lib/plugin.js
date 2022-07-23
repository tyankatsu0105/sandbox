const { NODE_ENV } = process.env
const DEFAULT_TARGET = '__DEV__'

/**
 * 
 * @param {import('babel__core')}
 * @return {import('babel__core').PluginObj}
 */
module.exports = ({ types: t }) => {
  const DEV_EXPRESSION = t.binaryExpression('===',
    t.memberExpression(
      t.memberExpression(
        t.identifier('process'),
        t.identifier('env'),
        false
      ),
      t.identifier('NODE_ENV'),false
    ),
    t.stringLiteral('development')
  )


  return {
    name: 'babel-plugin-replace-statement-dev',
    visitor: {
      Identifier (path, state) {
        const isDefaultTarget = t.isIdentifier(path.node, {name: DEFAULT_TARGET})
        const isOptionTarget = t.isIdentifier(path.node, {name: state.opts.target})        

        if(isDefaultTarget || isOptionTarget) path.replaceWith(DEV_EXPRESSION)
      }
    }
  }
}