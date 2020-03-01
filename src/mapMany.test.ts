import { mapMany } from './mapMany'

describe(`mapMany(transform)(iterable)`, () => {
  it(`should convert values into a flat iterable using the transform function`, () => {
    const output = [...mapMany<number>(x => [x, x * 2])([1, 2, 3])]

    expect(output).toEqual([1, 2, 2, 4, 3, 6])
  })
})
