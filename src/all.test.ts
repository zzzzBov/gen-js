import { all } from './all'

describe(`all(predicate)(iterable)`, () => {
  it(`should use a "false" function if no function is passed`, () => {
    const none = all()

    const falseResult = none([1])

    expect(falseResult).toBe(false)

    const trueResult = none([])
    
    expect(trueResult).toBe(true)
  })
  
  it(`should check if all values match the provided test`, () => {
    const allOdd = all<number>(x => x % 2)

    const falseResult = allOdd([1, 2, 3])

    expect(falseResult).toBe(false)

    const trueResult = allOdd([1, 3, 5])

    expect(trueResult).toBe(true)
  })
})
