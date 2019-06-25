const { expect } = require('chai')
const { describe, it } = require('mocha')
const skipWhile = require('../skipWhile')

describe(`gen`, () => {
  describe(`skipWhile(test)`, () => {
    it(`should be a function`, () => {
      expect(skipWhile).to.be.a('function')
    })

    it(`should produce a function when passed a test function`, () => {
      const result = skipWhile(() => {})

      expect(result).to.be.a('function')
    })

    it(`should throw a "TypeError" if not provided a test function`, () => {
      const noInput = () => {
        skipWhile()
      }

      expect(noInput).to.throw(TypeError)

      const badInput = () => {
        skipWhile(1)
      }

      expect(badInput).to.throw(TypeError)
    })

    it(`should skip until the test function returns a falsey value`, () => {
      const result = [...skipWhile(x => x % 2)([1, 2, 3])]

      expect(result).to.deep.equal([2, 3])
    })
  })
})
