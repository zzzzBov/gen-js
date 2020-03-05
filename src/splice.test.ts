import { splice } from './splice'

describe(`splice(start, deleteCount, ...items)(iterable)`, () => {
  it(`should throw a "RangeError" if "start" is negative`, () => {
    const negativeStart = () => {
      splice(-1, 0)
    }

    expect(negativeStart).toThrow(RangeError)
  })

  it(`should throw a "RangeError" if "deleteCount" is negative`, () => {
    const negativeDeleteCount = () => {
      splice(0, -1)
    }

    expect(negativeDeleteCount).toThrow(RangeError)
  })
  
  it(`should remove items from the beginning of the collection`, () => {
    const output = [...splice(0, 2)([1, 2, 3, 4, 5])]

    expect(output).toEqual([3, 4, 5])
  })

  it(`should remove items from the middle of the collection`, () => {
    const output = [...splice(2, 1)([1, 2, 3, 4, 5])]

    expect(output).toEqual([1, 2, 4, 5])
  })
  
  it(`should remove items from the end of the collection`, () => {
    const output = [...splice(3, 2)([1, 2, 3, 4, 5])]

    expect(output).toEqual([1, 2, 3])
  })
  
  it(`should remove the remaining items from a collection if "deleteCount" is greater than the remaining items`, () => {
    const output = [...splice(3, 10)([1, 2, 3, 4, 5])]

    expect(output).toEqual([1, 2, 3])
  })
  
  it(`should insert items at the beginning of the collection`, () => {
    const output = [...splice(0, 0, 10, 9, 8)([1, 2, 3, 4, 5])]

    expect(output).toEqual([10, 9, 8, 1, 2, 3, 4, 5])
  })

  it(`should insert items in the middle of the collection`, () => {
    const output = [...splice(2, 0, 10, 9, 8)([1, 2, 3, 4, 5])]

    expect(output).toEqual([1, 2, 10, 9, 8, 3, 4, 5])
  })
  
  it(`should insert items at the end of the collection`, () => {
    const output = [...splice(5, 0, 10, 9, 8)([1, 2, 3, 4, 5])]

    expect(output).toEqual([1, 2, 3, 4, 5, 10, 9, 8])
  })
  
  it(`should add items to the end of the collection if start is greater than the length of the collection`, () => {
    const output = [...splice(10, 0, 10, 9, 8)([1, 2, 3, 4, 5])]

    expect(output).toEqual([1, 2, 3, 4, 5, 10, 9, 8])
  })

  it(`should splice in new items while removing deleted items`, () => {
    const output = [...splice(1, 1, 2.1, 2.2, 2.3)([1, 2, 3])]

    expect(output).toEqual([1, 2.1, 2.2, 2.3, 3])
  })
})
