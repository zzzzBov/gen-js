/* eslint-env mocha */

const {expect} = require('chai')
const filter = require('../filter')

describe(`gen`, () => {
  describe(`filter(test)`, () => {
    it(`should be a function`, () => {
      expect(filter).to.be.a('function')
    })

    it(`should produce a function when passed a function`, () => {
      const result = filter(() => {})

      expect(result).to.be.a('function')
    })

    it(`should throw a "TypeError" if not provided a function`, () => {
      const noInput = () => {
        filter()
      }

      expect(noInput).to.throw(TypeError)

      const badInput = () => {
        filter(1)
      }

      expect(badInput).to.throw(TypeError)
    })

    it(`should generate values that match the provided test`, () => {
      const odds = filter(x => x % 2)([1, 2, 3, 4, 5, 6])

      expect([...odds]).to.deep.equal([1, 3, 5])
    })
  })
})
