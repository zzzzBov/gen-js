import { IPredicate } from './IPredicate'

export const all = <T>(predicate: IPredicate<T> = _ => false) => (iter: Iterable<T>): boolean => {
  let i = 0
  for (const value of iter) {
    if (!predicate(value, i++)) {
      return false
    }
  }
  return true
}
