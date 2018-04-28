const {expect} = require('chai')
const {describe, it} = require('mocha')
const takeWhile = require('../takeWhile')

describe(`gen`, () => {
  describe(`takeWhile(test)`, () => {
    it(`should be a function`, () => {
      expect(takeWhile).to.be.a('function')
    })

    it(`should produce a function when passed a test function`, () => {
      const result = takeWhile(() => {})

      expect(result).to.be.a('function')
    })

    it(`should throw a "TypeError" if not provided a test function`, () => {
      const noInput = () => {
        takeWhile()
      }

      expect(noInput).to.throw(TypeError)

      const badInput = () => {
        takeWhile(1)
      }

      expect(badInput).to.throw(TypeError)
    })

    it(`should take until the test function returns a falsey value`, () => {
      const result = [...takeWhile(x => x < 4)([1, 2, 3, 4, 5])]

      expect(result).to.deep.equal([1, 2, 3])
    })
  })
})
