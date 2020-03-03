import { skip } from './skip'

describe(`skip(count)(iterable)`, () => {
  it(`should skip "count" items in a collection`, () => {
    const output = [...skip(2)([1, 2, 3, 4, 5])]

    expect(output).toEqual([3, 4, 5])
  })

  it(`should throw a "RangeError" if "count" is negative`, () => {
    const negativeInput = () => {
      skip(-1)
    }

    expect(negativeInput).toThrow(RangeError)
  })
})
