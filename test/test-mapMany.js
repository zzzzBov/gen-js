const { expect } = require('chai')
const { describe, it } = require('mocha')
const mapMany = require('../mapMany')

describe(`gen`, () => {
  describe(`mapMany(transform)`, () => {
    it(`should be a function`, () => {
      expect(mapMany).to.be.a('function')
    })

    it(`should produce a function when passed a function`, () => {
      const result = mapMany(() => {})

      expect(result).to.be.a('function')
    })

    it(`should throw a "TypeError" if not provided a function`, () => {
      const noInput = () => {
        mapMany()
      }

      expect(noInput).to.throw(TypeError)

      const badInput = () => {
        mapMany(1)
      }

      expect(badInput).to.throw(TypeError)
    })

    it(`should convert values into a flat array using the transform function`, () => {
      const result = [...mapMany(x => [x, x * 2])([1, 2, 3])]

      expect(result).to.deep.equal([1, 2, 2, 4, 3, 6])
    })
  })
})
