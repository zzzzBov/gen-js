const { expect } = require('chai')
const { describe, it } = require('mocha')
const any = require('../any')

describe(`gen`, () => {
  describe(`any(test)`, () => {
    it(`should be a function`, () => {
      expect(any).to.be.a('function')
    })

    it(`should produce a function when passed a function`, () => {
      const result = any(() => {})

      expect(result).to.be.a('function')
    })

    it(`should use a "true" function if no function is passed`, () => {
      const functionResult = any()

      expect(functionResult).to.be.a('function')

      const trueResult = any()([1])

      expect(trueResult).to.equal(true)

      const falseResult = any()([])

      expect(falseResult).to.equal(false)
    })

    it(`should check if any values match the provided test`, () => {
      const trueResult = any(x => x % 2)([1, 2, 3])

      expect(trueResult).to.equal(true)

      const falseResult = any(x => x % 2)([2, 4, 6])

      expect(falseResult).to.equal(false)
    })

    it(`should throw a "TypeError" if not provided a function`, () => {
      const badInput = () => {
        any(1)
      }

      expect(badInput).to.throw(TypeError)
    })
  })
})
