[![NPM][npm]][npm-url]
[![Deps][deps]][deps-url]
[![Tests][build]][build-url]
[![Coverage][cover]][cover-url]
[![Standard Code Style][style]][style-url]
[![Chat][chat]][chat-badge]

# PostHTML JSX <img align="right" width="200" height="220" title="PostHTML" src="http://posthtml.github.io/posthtml/logo.svg">

## Install

```bash
npm i -D posthtml-jsx
```

## Usage

```js
posthtml(plugins)
  .process(html, { render: jsx(options) })
  .then(({ html }) => console.log(html))
```

## Options

**`type`:** `{String}`: Type of the Component ( es5 || es2015 || stateless )

**`name`:** `{String}`: Name of the Component

**`props`:** `{String|Array}`: Props of the Component

**`export`:** `{Boolean}`: Export Component JS Module (true || false)

## Example

```js
import { readFileSync, writeFileSync } from 'fs'

import posthtml from 'posthtml'
import jsx from 'posthtml-jsx'

const html = readFileSync('./index.html', 'utf8')

posthtml()
  .process(html, {
    render: jsx({
      type: 'es2015'
      name: 'Test'
      props: ['prop', '{ prop }', '...props']
      export: true
    })
  })
  .then((result) => writeFileSync('./Test.jsx', result.html, 'utf8'))
```

```html
<div id={id} class={container}>
  {content}
</div>
```

```js
import { Component } from 'react'

class Test extends Component {
  render (prop, { prop }, ...props) {
    return (
      <div id={test.id} className={test.class}>
        {test.content}
      </div>
    )
  }
}

export default Test
```

## Maintainers

<table>
  <tbody>
   <tr>
    <td align="center">
      <img width="150 height="150"
      src="https://avatars.githubusercontent.com/u/5419992?v=3&s=150">
      <br />
      <a href="https://github.com/michael-ciniawsky">Michael Ciniawsky</a>
    </td>
   </tr>
  <tbody>
</table>

## Contributing

See [PostHTML Guidelines](https://github.com/posthtml/posthtml/tree/master/docs) and [CONTRIBUTING](CONTRIBUTING.md).

## LICENSE

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/posthtml-jsx.svg
[npm-url]: https://npmjs.com/package/posthtml-jsx

[deps]: https://david-dm.org/posthtml/posthtml-jsx.svg
[deps-url]: https://david-dm.org/posthtml/posthtml-jsx

[build]: http://img.shields.io/travis/posthtml/posthtml-jsx.svg
[build-url]: https://travis-ci.org/posthtml/posthtml-jsx

[cover]: https://coveralls.io/repos/github/posthtml/posthtml-jsx/badge.svg?branch=master
[cover-url]: https://coveralls.io/github/posthtml/posthtml-jsx?branch=master

[style]: https://img.shields.io/badge/code%20style-standard-yellow.svg
[style-url]: http://standardjs.com/

[chat]: https://badges.gitter.im/posthtml/posthtml.svg
[chat-badge]: https://gitter.im/posthtml/posthtml?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge"
