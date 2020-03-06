import { infinite } from './infinite'
import { integers } from './integers'
import { interleave } from './interleave'
import { pipe } from './pipe'
import { take } from './take'
import { toArray } from './toArray'
import { unique } from './unique'

describe(`unique(iterable)`, () => {
  it(`should find unique values within an iterable`, () => {
    const output = [...unique([1, 2, 1, 3, 1, 4, 1, 5])]

    expect(output).toEqual([1, 2, 3, 4, 5])
  })

  it(`not time out with infinite iterables`, () => {
    const output = pipe(
      integers(1),
      interleave(infinite(1)),
      unique,
      take(5),
      toArray
    )

    expect(output).toEqual([1, 2, 3, 4, 5])
  })
})
