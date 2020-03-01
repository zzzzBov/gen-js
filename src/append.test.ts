import { append } from './append'

describe(`append(...items)(iterable)`, () => {
  it(`should append items to the provided collection`, () => {
    const result = [...append(4, 5, 6)([1, 2, 3])]

    expect(result).toEqual([1, 2, 3, 4, 5, 6])
  })
})
