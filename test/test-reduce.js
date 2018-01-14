/* eslint-env mocha */

const {expect} = require('chai')
const reduce = require('../reduce')

describe(`gen`, () => {
  describe(`reduce(reducer, initial)`, () => {
    it(`should be a function`, () => {
      expect(reduce).to.be.a('function')
    })

    it(`should produce a function when passed a function`, () => {
      const result = reduce(() => {})

      expect(result).to.be.a('function')
    })

    it(`should throw a "TypeError" if not provided a function`, () => {
      const noInput = () => {
        reduce()
      }

      expect(noInput).to.throw(TypeError)

      const badInput = () => {
        reduce(1)
      }

      expect(badInput).to.throw(TypeError)
    })

    it(`should reduce a collection to a single value using the provided reducer`, () => {
      const result = reduce((acc = 0, v) => acc + v)([1, 2, 3])

      expect(result).to.equal(6)
    })

    it(`should seed the reduction using the "initial" value`, () => {
      const result = reduce((acc = 0, v) => acc + v, 10)([1, 2, 3])

      expect(result).to.equal(16)
    })
  })
})
