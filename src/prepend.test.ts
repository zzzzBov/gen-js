import { prepend } from './prepend'

describe(`prepend(...items)(iterable)`, () => {
  it(`should prepend items to the provided collection`, () => {
    const output = [...prepend(1, 2, 3)([4, 5, 6])]

    expect(output).toEqual([1, 2, 3, 4, 5, 6])
  })
})
