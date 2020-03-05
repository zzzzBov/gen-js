export const take = <T>(count: number) => {
  if (count < 0) {
    throw new RangeError(`"count" must not be negative.`)
  }

  return function * (iterable: Iterable<T>) {
    let i = 0
    for (const value of iterable) {
      if (i++ < count) {
        yield value
      } else {
        break
      }
    }
  }
}
