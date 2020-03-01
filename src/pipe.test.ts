import { pipe } from './pipe'

describe(`pipe(input, ...functions)`, () => {
  it(`should return the input if no functions are passed`, () => {
    const output = pipe(1)

    expect(output).toBe(1)
  })

  it(`should pass the output of each function as the input of the subsequent functions`, () => {
    let output1 = null
    let output2 = null
    let output3 = null

    const output4 = pipe(
      1,
      n => {
        output1 = n
        return 2
      },
      n => {
        output2 = n
        return 3
      },
      n => {
        output3 = n
        return 4
      }
    )

    expect(output1).toBe(1)
    expect(output2).toBe(2)
    expect(output3).toBe(3)
    expect(output4).toBe(4)
  })
})
