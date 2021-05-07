import type { IPredicate } from './IPredicate';

export const all = <T>(predicate: IPredicate<T> = _ => false) => (
  iterable: Iterable<T>
): boolean => {
  let i = 0;
  for (const value of iterable) {
    if (!predicate(value, i++)) {
      return false;
    }
  }
  return true;
};
