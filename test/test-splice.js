const {expect} = require('chai')
const {describe, it} = require('mocha')
const splice = require('../splice')

describe(`gen`, () => {
  describe(`splice(start, deleteCount, ...items)`, () => {
    it(`should be a function`, () => {
      expect(splice).to.be.a('function')
    })

    it(`should throw a "RangeError" if "start" is negative`, () => {
      const negativeStart = () => {
        splice(-1, 0)
      }

      expect(negativeStart).to.throw(RangeError)
    })

    it(`should throw a "RangeError" if "deleteCount" is negative`, () => {
      const negativeDeleteCount = () => {
        splice(0, -1)
      }

      expect(negativeDeleteCount).to.throw(RangeError)
    })

    it(`should throw a "TypeError" if "start" is not a number`, () => {
      const noInput = () => {
        splice()
      }

      expect(noInput).to.throw(TypeError)
    })

    it(`should throw a "TypeError" if "deleteCount" is not a number`, () => {
      const noInput = () => {
        splice(0)
      }

      expect(noInput).to.throw(TypeError)
    })

    it(`should produce a function when passed a "start" and "deleteCount"`, () => {
      const result = splice(0, 0)

      expect(result).to.be.a('function')
    })

    it(`should remove items from the beginning of the collection`, () => {
      const result = [...splice(0, 2)([1, 2, 3, 4, 5])]

      expect(result).to.deep.equal([3, 4, 5])
    })

    it(`should remove items from the middle of the collection`, () => {
      const result = [...splice(2, 1)([1, 2, 3, 4, 5])]

      expect(result).to.deep.equal([1, 2, 4, 5])
    })

    it(`should remove items from the end of the collection`, () => {
      const result = [...splice(3, 2)([1, 2, 3, 4, 5])]

      expect(result).to.deep.equal([1, 2, 3])
    })

    it(`should remove the remaining items from a collection if "deleteCount" is greater than the remaining items`, () => {
      const result = [...splice(3, 10)([1, 2, 3, 4, 5])]

      expect(result).to.deep.equal([1, 2, 3])
    })

    it(`should insert items at the beginning of the collection`, () => {
      const result = [...splice(0, 0, 10, 9, 8)([1, 2, 3])]

      expect(result).to.deep.equal([10, 9, 8, 1, 2, 3])
    })

    it(`should insert items in the middle of the collection`, () => {
      const result = [...splice(2, 0, 10, 9, 8)([1, 2, 3, 4, 5])]

      expect(result).to.deep.equal([1, 2, 10, 9, 8, 3, 4, 5])
    })

    it(`should insert items at the end of the collection`, () => {
      const result = [...splice(5, 0, 10, 9, 8)([1, 2, 3, 4, 5])]

      expect(result).to.deep.equal([1, 2, 3, 4, 5, 10, 9, 8])
    })

    it(`should add items to the end of the collection if start is greater than the length of the collection`, () => {
      const result = [...splice(10, 0, 10, 9, 8)([1, 2, 3])]

      expect(result).to.deep.equal([1, 2, 3, 10, 9, 8])
    })

    it(`should splice in new items while removing deleted items`, () => {
      const result = [...splice(1, 1, 2.1, 2.2, 2.3)([1, 2, 3])]

      expect(result).to.deep.equal([1, 2.1, 2.2, 2.3, 3])
    })
  })
})
