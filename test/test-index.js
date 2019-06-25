const { expect } = require('chai')
const { describe, it } = require('mocha')
const gen = require('../index')
const pkg = require('../package')

describe(`gen index`, () => {
  ;[
    'all',
    'any',
    'append',
    'concat',
    'count',
    'filter',
    'integers',
    'map',
    'mapMany',
    'pipe',
    'prepend',
    'reduce',
    'skip',
    'skipWhile',
    'splice',
    'take',
    'takeWhile',
    'unique'
  ].forEach(fn => {
    describe(fn, () => {
      it(`${fn} should be a function`, () => {
        expect(gen[fn]).to.be.a('function')
      })

      it(`${fn} should be included in the package.json file`, () => {
        const result = pkg.files.includes(`${fn}.js`)

        expect(result).to.equal(true)
      })
    })
  })
})
