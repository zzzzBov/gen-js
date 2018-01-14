const {expect} = require('chai')
const all = require('../all')

describe(`gen`, () => {
  describe(`all(test)`, () => {
    it(`should be a function`, () => {
      expect(all).to.be.a('function')
    })

    it(`should produce a function when passed a function`, () => {
      const result = all(() => {})

      expect(result).to.be.a('function')
    })

    it(`should use a "false" function if no function is passed`, () => {
      const functionResult = all()

      expect(functionResult).to.be.a('function')

      const falseResult = all()([1])

      expect(falseResult).to.be.false

      const trueResult = all()([])

      expect(trueResult).to.be.true
    })

    it(`should check if all values match the provided test`, () => {
      const trueResult = all(x => x % 2)([1, 3, 5])

      expect(trueResult).to.be.true

      const falseResult = all(x => x % 2)([1, 2, 3])

      expect(falseResult).to.be.false
    })

    it(`should throw a "TypeError" if not provided a function`, () => {
      const badInput = () => {
        all(1)
      }

      expect(badInput).to.throw(TypeError)
    })
  })
})
