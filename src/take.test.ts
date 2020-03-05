import { take } from './take'

describe(`take(count)(iterable)`, () => {
  it(`should take "count" items in a collection`, () => {
    const output = [...take(3)([1, 2, 3, 4, 5])]

    expect(output).toEqual([1, 2, 3])
  })

  it(`should throw a "RangeError" if "count" is negative`, () => {
    const negativeCount = () => {
      take(-1)
    }

    expect(negativeCount).toThrow(RangeError)
  })
})
