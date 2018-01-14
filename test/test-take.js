/* eslint-env mocha */

const {expect} = require('chai')
const take = require('../take')

describe(`gen`, () => {
  describe(`take(count)`, () => {
    it(`should be a funciton`, () => {
      expect(take).to.be.a('function')
    })

    it(`should produce a function when passed a count`, () => {
      const result = take(1)

      expect(result).to.be.a('function')
    })

    it(`should throw a "TypeError" if not provided a count`, () => {
      const noInput = () => {
        take()
      }

      expect(noInput).to.throw(TypeError)

      const badInput = () => {
        take(NaN)
      }

      expect(badInput).to.throw(TypeError)
    })

    it(`should take "count" items in a collection`, () => {
      const result = [...take(3)([1, 2, 3, 4, 5])]

      expect(result).to.deep.equal([1, 2, 3])
    })

    it(`should throw a "RangeError" if "count" is negative`, () => {
      const negativeInput = () => {
        take(-1)
      }

      expect(negativeInput).to.throw(RangeError)
    })
  })
})
