import { concat } from './concat'

describe(`concat(...collections)(iterable)`, () => {
  it(`should concatenate each of the provided collections after the initial iterable`, () => {
    const output = [...concat([4], [5, 6])([1, 2, 3])]

    expect(output).toEqual([1, 2, 3, 4, 5, 6])
  })
})
