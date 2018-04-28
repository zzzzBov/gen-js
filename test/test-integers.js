const {expect} = require('chai')
const {describe, it} = require('mocha')
const integers = require('../integers')

describe(`gen`, () => {
  describe(`integers(start = 0, end = Number.MAX_SAFE_INTEGER)`, () => {
    it(`should be a function`, () => {
      expect(integers).to.be.a('function')
    })

    it(`should create a generator that counts from "start" to "end"`, () => {
      const result = [...integers(0, 5)]

      expect(result).to.deep.equal([0, 1, 2, 3, 4, 5])
    })

    it(`should count down if "start" is greater than "end"`, () => {
      const result = [...integers(5, 0)]

      expect(result).to.deep.equal([5, 4, 3, 2, 1, 0])
    })
  })
})
