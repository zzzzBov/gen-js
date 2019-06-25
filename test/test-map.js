const { expect } = require('chai')
const { describe, it } = require('mocha')
const map = require('../map')

describe(`gen`, () => {
  describe(`map(transform)`, () => {
    it(`should be a function`, () => {
      expect(map).to.be.a('function')
    })

    it(`should produce a function when passed a function`, () => {
      const result = map(() => {})

      expect(result).to.be.a('function')
    })

    it(`should throw a "TypeError" if not provided a function`, () => {
      const noInput = () => {
        map()
      }

      expect(noInput).to.throw(TypeError)

      const badInput = () => {
        map(1)
      }

      expect(badInput).to.throw(TypeError)
    })

    it(`should convert values using the transform function`, () => {
      const result = [...map(x => x * 2)([1, 2, 3])]

      expect(result).to.deep.equal([2, 4, 6])
    })
  })
})
