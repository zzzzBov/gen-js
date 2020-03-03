import { IPredicate } from './IPredicate'

export const skipWhile = <T>(predicate: IPredicate<T>) => (
  function * (iterable: Iterable<T>) {
    let i = 0
    let skipping: unknown = true
    for (const value of iterable) {
      if (!skipping) {
        yield value
      }

      skipping = predicate(value, i++)

      if (!skipping) {
        yield value
      }
    }
  }
)
