const {expect} = require('chai')
const {describe, it} = require('mocha')
const concat = require('../concat')

describe(`gen`, () => {
  describe(`concat(...collections)`, () => {
    it(`should be a function`, () => {
      expect(concat).to.be.a('function')
    })

    it(`should produce a function when passed some collections`, () => {
      const result = concat([1])

      expect(result).to.be.a('function')
    })

    it(`should concatenate each of the provided collections after the initial generator`, () => {
      const result = [...concat([4], [5, 6])([1, 2, 3])]

      expect(result).to.deep.equal([1, 2, 3, 4, 5, 6])
    })
  })
})
