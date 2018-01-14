/* eslint-env mocha */

const {expect} = require('chai')
const skip = require('../skip')

describe(`gen`, () => {
  describe(`skip(count)`, () => {
    it(`should be a function`, () => {
      expect(skip).to.be.a('function')
    })

    it(`should produce a function when passed a count`, () => {
      const result = skip(1)

      expect(result).to.be.a('function')
    })

    it(`should throw a "TypeError" if not provided a count`, () => {
      const noInput = () => {
        skip()
      }

      expect(noInput).to.throw(TypeError)

      const badInput = () => {
        skip(NaN)
      }

      expect(badInput).to.throw(TypeError)
    })

    it(`should skip "count" items in a collection`, () => {
      const result = [...skip(2)([1, 2, 3, 4, 5])]

      expect(result).to.deep.equal([3, 4, 5])
    })

    it(`should throw a "RangeError" if "count" is less than 0`, () => {
      const negativeInput = () => {
        skip(-1)
      }

      expect(negativeInput).to.throw(RangeError)
    })
  })
})
