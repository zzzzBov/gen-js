import { IPredicate } from './IPredicate';

export const first = <T>(predicate: IPredicate<T> = _ => true) => (
  iterable: Iterable<T>
): T | undefined => {
  let i = 0;
  for (const value of iterable) {
    if (predicate(value, i++)) {
      return value;
    }
  }
  return undefined;
};
