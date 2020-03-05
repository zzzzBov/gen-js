export const splice = <T>(start: number, deleteCount: number, ...items: T[]) => {
  if (start < 0) {
    throw new RangeError(`"start" must not be negative`)
  }

  if (deleteCount < 0) {
    throw new RangeError(`"deleteCount" must not be negative`)
  }

  return function * (iterable: Iterable<T>) {
    const end = start + deleteCount

    let i = 0
    for (const value of iterable) {
      if (i < start) {
        yield value
      } else if (i === start) {
        yield * items
      }

      if (i >= end) {
        yield value
      }

      ++i
    }

    if (start >= i) {
      yield * items
    }
  }
}
