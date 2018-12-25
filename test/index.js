const test = require('ava')

const { join } = require('path')
const { readFileSync, writeFileSync } = require('fs')

const fixtures = (file) => readFileSync(join(__dirname, 'fixtures', file), 'utf8')
const expected = (file) => readFileSync(join(__dirname, 'expect', file), 'utf8')

const posthtml = require('posthtml')
const jsx = require('..')

test('1 - ES5', (t) => {
  return posthtml()
    .process(
      fixtures('index.html'), {
        render: jsx({
          type: 'es5',
          name: 'ES5',
          props: ['prop1', '...prop2'],
          export: true
        })
      }
    )
    .then((result) => {
      writeFileSync('./expect/ES5.jsx', result.html, 'utf8')
      t.is(expected('ES5.jsx'), result.html)
    })
})

test('2 - ES2015', (t) => {
  return posthtml()
    .process(
      fixtures('index.html'), {
        render: jsx({
          type: 'es2015',
          name: 'ES2015',
          props: ['prop1', '...prop2'],
          export: true
        })
      }
    )
    .then((result) => {
      writeFileSync('./expect/ES2015.jsx', result.html, 'utf8')
      t.is(expected('ES2015.jsx'), result.html)
    })
})

test('3 - Stateless', (t) => {
  return posthtml()
    .process(
      fixtures('index.html'), {
        render: jsx({
          type: 'stateless',
          name: 'stateless',
          props: ['prop1', 'prop2'],
          export: true
        })
      }
    )
    .then((result) => {
      writeFileSync('./expect/Stateless.jsx', result.html, 'utf8')
      t.is(expected('Stateless.jsx'), result.html)
    })
})
