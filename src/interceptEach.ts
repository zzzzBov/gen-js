import type { IPredicate } from './IPredicate';

export const interceptEach = <T>(predicate: IPredicate<T>) =>
  function*(iterable: Iterable<T>) {
    let i = 0;
    for (const value of iterable) {
      predicate(value, i++);
      yield value;
    }
  };
