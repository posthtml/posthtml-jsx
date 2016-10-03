const jsx = require('./lib/jsx')

/**
 * @author Michael Ciniawsky (@michael-ciniawsky) <michael.ciniawsky@gmail.com>
 * @description JSX Renderer for PostHTML
 *
 * @module posthtml-jsx
 * @version 1.0.0
 *
 * @requires ./lib/jsx.js
 *
 * @method postHTMLJSX
 *
 * @param  {Object} options Options
 *
 * @return {Function} jsx  JSX
 */
module.exports = (options) => {
  options = options || {}
  options.type = options.type || 'es2015'
  options.name = options.name
  options.props = options.props || '...props'
  options.export = options.export || true

  return function postHTMLJSX (tree) {
    return jsx(tree, options)
  }
}
