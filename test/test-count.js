const {expect} = require('chai')
const {describe, it} = require('mocha')
const count = require('../count')

describe(`gen`, () => {
  describe(`count`, () => {
    it(`should be a function`, () => {
      expect(count).to.be.a('function')
    })

    it(`should count items in an empty array`, () => {
      const result = count([])

      expect(result).to.equal(0)
    })

    it(`should count items in an array`, () => {
      const result = count([1, 2, 3])

      expect(result).to.equal(3)
    })

    it(`should count items in a generator`, () => {
      const gen = function * () {
        yield 1
        yield 2
        yield 3
      }
      const result = count(gen())

      expect(result).to.equal(3)
    })
  })
})
