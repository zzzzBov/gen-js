/* eslint-env mocha */

const {expect} = require('chai')
const unique = require('../unique')

describe(`gen`, () => {
  describe(`unique(comparator = (a, b) => a === b)`, () => {
    it(`should be a function`, () => {
      expect(unique).to.be.a('function')
    })

    it(`should produce a function when passed a comparator function`, () => {
      const result = unique(() => {})

      expect(result).to.be.a('function')
    })

    it(`should throw a "TypeError" if not provided a comparator function`, () => {
      const badInput = () => {
        unique(1)
      }

      expect(badInput).to.throw(TypeError)
    })

    it(`should use a strict equality function if no function is passed`, () => {
      const result = [...unique()([1, 2, 1, 3, 1, 4])]

      expect(result).to.deep.equal([1, 2, 3, 4])
    })

    it(`should use the comparator function to determine which values are unique`, () => {
      const result = [...unique((a, b) => Math.floor(a) === Math.floor(b))([1, 1.1, 1.2, 2, 2.5, 3, 3.7])]

      expect(result).to.deep.equal([1, 2, 3])
    })
  })
})
