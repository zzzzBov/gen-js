import type { IPredicate } from './IPredicate';

export const takeWhile = <T>(predicate: IPredicate<T>) =>
  function*(iterable: Iterable<T>) {
    let i = 0;
    for (const value of iterable) {
      if (predicate(value, i++)) {
        yield value;
      } else {
        break;
      }
    }
  };
