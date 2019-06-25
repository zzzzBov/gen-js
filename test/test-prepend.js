const { expect } = require('chai')
const { describe, it } = require('mocha')
const prepend = require('../prepend')

describe(`gen`, () => {
  describe(`prepend(...items)`, () => {
    it(`should be a function`, () => {
      expect(prepend).to.be.a('function')
    })

    it(`should produce a function when passed some items`, () => {
      const result = prepend(1)

      expect(result).to.be.a('function')
    })

    it(`should prepend items to the provided collection`, () => {
      const result = [...prepend(1, 2, 3)([4, 5, 6])]

      expect(result).to.deep.equal([1, 2, 3, 4, 5, 6])
    })
  })
})
