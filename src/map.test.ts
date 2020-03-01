import { map } from './map'

describe(`map(transform)(iterable)`, () => {
  it(`should convert values using the transform function`, () => {
    const output = [...map<number>(x => x * 2)([1, 2, 3])]

    expect(output).toEqual([2, 4, 6])
  })
})
