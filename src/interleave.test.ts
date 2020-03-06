import { interleave } from './interleave'

describe(`interleave(...iterables)(iterable)`, () => {
  it.each`
    input               | between       | expected
    ${[]}               | ${[]}         | ${[]}
    ${[]}               | ${[1]}        | ${[1]}
    ${[1]}              | ${[2]}        | ${[1, 2]}
    ${[1]}              | ${[2, 4, 6]}  | ${[1, 2, 4, 6]}
    ${[1, 3]}           | ${[2, 4, 6]}  | ${[1, 2, 3, 4, 6]}
    ${[1, 3, 5]}        | ${[2, 4, 6]}  | ${[1, 2, 3, 4, 5, 6]}
    ${[1, 3, 5, 7]}     | ${[2, 4, 6]}  | ${[1, 2, 3, 4, 5, 6, 7]}
    ${[1, 3, 5, 7, 9]}  | ${[2, 4, 6]}  | ${[1, 2, 3, 4, 5, 6, 7, 9]}
  `(`should insert $between between $input to produce $expected`, ({
    input,
    between,
    expected
  }) => {
    const output = [...interleave(between)(input)]

    expect(output).toEqual(expected)
  })

  it(`should interleave multiple iterables`, () => {
    const output = [...interleave([10, 20, 30], [100, 200, 300])([1, 2, 3])]

    expect(output).toEqual([1, 10, 100, 2, 20, 200, 3, 30, 300])
  })
})
