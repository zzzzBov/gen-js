import { IPredicate } from './IPredicate';

export const any = <T>(predicate: IPredicate<T> = _ => true) => (
  iterable: Iterable<T>
): boolean => {
  let i = 0;
  for (const value of iterable) {
    if (predicate(value, i++)) {
      return true;
    }
  }
  return false;
};
