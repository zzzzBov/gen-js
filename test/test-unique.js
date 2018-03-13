/* eslint-env mocha */

const {expect} = require('chai')
const unique = require('../unique')

describe(`gen`, () => {
  describe(`unique`, () => {
    it(`should be a function`, () => {
      expect(unique).to.be.a('function')
    })

    it(`should find unique values`, () => {
      const result = [...unique([1, 2, 1, 3, 1, 4])]

      expect(result).to.deep.equal([1, 2, 3, 4])
    })
  })
})
