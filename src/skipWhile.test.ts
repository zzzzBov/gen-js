import { skipWhile } from './skipWhile'

describe(`skipWhile(predicate)(iterable)`, () => {
  it(`should skip until the test function returns a falsey value`, () => {
    const output = [...skipWhile<number>(x => x % 2)([1, 2, 3])]

    expect(output).toEqual([2, 3])
  })
})
