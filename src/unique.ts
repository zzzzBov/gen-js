export const unique = function * unique<T>(iterable: Iterable<T>) {
  const set = new Set()

  for (const value of iterable) {
    if (!set.has(value)) {
      set.add(value)
      yield value
    }
  }
}
