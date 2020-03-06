import { infinite } from './infinite'

describe(`infinite(...items)`, () => {
  it(`should repeat its arguments infinitely`, () => {
    const iterable = infinite(1, 2, 3)

    const output1 = iterable.next().value

    expect(output1).toBe(1)

    const output2 = iterable.next().value

    expect(output2).toBe(2)

    const output3 = iterable.next().value

    expect(output3).toBe(3)

    const output4 = iterable.next().value

    expect(output4).toBe(1)

    const output5 = iterable.next().value

    expect(output5).toBe(2)

    const output6 = iterable.next().value

    expect(output6).toBe(3)
    
    const output7 = iterable.next().value

    expect(output7).toBe(1)

    const output8 = iterable.next().value

    expect(output8).toBe(2)

    const output9 = iterable.next().value

    expect(output9).toBe(3)
  })
  
  it(`should throw an error if no arguments are passed`, () => {
    const noArguments = () => {
      infinite()
    }

    expect(noArguments).toThrow(Error)
  })
})
