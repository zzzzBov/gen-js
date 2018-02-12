/* eslint-env mocha */

const {expect} = require('chai')
const pipe = require('../pipe')

describe(`gen`, () => {
  describe(`pipe(input, ...functions)`, () => {
    it(`should be a function`, () => {
      expect(pipe).to.be.a('function')
    })

    it(`should return the input if no functions are passed`, () => {
      const result = pipe(1)

      expect(result).to.equal(1)
    })

    it(`should pass the input to the next function parameter`, () => {
      let result
      pipe(
        1,
        r => {
          result = r
        }
      )

      expect(result).to.equal(1)
    })

    it(`should return the value from the piped functions`, () => {
      const result = pipe(1, n => n * 2)

      expect(result).to.equal(2)
    })

    it(`should throw if a piped function throws`, () => {
      const badFunction = () => {
        pipe(
          1,
          () => {
            throw new Error()
          }
        )
      }

      expect(badFunction).to.throw(Error)
    })

    it(`should pass the output of each function as the input of the subsequent functions`, () => {
      let result1, result2, result3

      const result4 = pipe(
        1,
        n => {
          result1 = n
          return 2
        },
        n => {
          result2 = n
          return 3
        },
        n => {
          result3 = n
          return 4
        }
      )

      expect(result1).to.equal(1)
      expect(result2).to.equal(2)
      expect(result3).to.equal(3)
      expect(result4).to.equal(4)
    })
  })
})
