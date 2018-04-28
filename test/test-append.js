const {expect} = require('chai')
const {describe, it} = require('mocha')
const append = require('../append')

describe(`gen`, () => {
  describe(`append(...items)`, () => {
    it(`should be a function`, () => {
      expect(append).to.be.a('function')
    })

    it(`should produce a function when passed some items`, () => {
      const result = append(1)

      expect(result).to.be.a('function')
    })

    it(`should append items to the provided collection`, () => {
      const result = [...append(4, 5, 6)([1, 2, 3])]

      expect(result).to.deep.equal([1, 2, 3, 4, 5, 6])
    })
  })
})
