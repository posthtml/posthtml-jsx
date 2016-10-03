const render = require('posthtml-render')

/**
 * @module jsx
 * @requires posthtml-render
 *
 * @method template
 *
 * @param  {Array}  tree    PostHTMLTree
 * @param  {Object} options JSX Options
 *
 * @return {Function}       HTML JSX
 */
function attrs (html) {
  html = html
    .split('\n')
    .map((x) => x.replace(/class=/g, 'className='))
    .join('\n      ')
  return html
}

function props (props) {
  if (Array.isArray(props)) {
    return props.join(', ')
  }
  return props
}

module.exports = function jsx (tree, options) {
  let component

  if (options.type === 'es2015') {
    component = `
class ${options.name} extends Component {
  render (${options.props ? props(options.props) : ''}) {
    return (
      ${attrs(render(tree))}
    )
  }
}`
  } else if (options.type === 'es5') {
    component = `
var ${options.name} = React.createClass({
  render: function (${options.props ? props(options.props) : ''}) {
    return (
      ${attrs(render(tree))}
    )
  }
})`
  } else if (options.type === 'stateless') {
    component = `
const ${options.name} = (${options.props ? props(options.props) : ''}) => {
  return (
    ${attrs(render(tree))}
  )
}`
  }

  if (options.export && options.type === 'es5') {
    return `
var React = require('react')

${component}

module.exports = ${options.name}`
  } else if (options.export && options.type === ('es2015' || 'stateless')) {
    return `
import { Component } from 'react'

${component}

export default ${options.name}`
  } else {
    return component
  }
}
