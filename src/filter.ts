import type { IPredicate } from './IPredicate';

export const filter = <T>(predicate: IPredicate<T>) =>
  function*(iterable: Iterable<T>) {
    let i = 0;
    for (const value of iterable) {
      if (predicate(value, i++)) {
        yield value;
      }
    }
  };
