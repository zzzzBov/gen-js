import { IPredicate } from './IPredicate';

export const any = <T>(predicate: IPredicate<T> = _ => true) => (iter: Iterable<T>): boolean => {
  let i = 0
  for (const value of iter) {
    if (predicate(value, i++)) {
      return true
    }
  }
  return false
}
