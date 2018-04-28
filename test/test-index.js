const {expect} = require('chai')
const {describe, it} = require('mocha')
const gen = require('../index')

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
    'take',
    'takeWhile',
    'unique'
  ].forEach(fn => {
    describe(fn, () => {
      it(`${fn} should be a function`, () => {
        expect(gen[fn]).to.be.a('function')
      })
    })
  })
})
