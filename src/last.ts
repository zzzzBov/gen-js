import type { IPredicate } from './IPredicate';

export const last = <T>(predicate: IPredicate<T> = _ => true) => (
  iterable: Iterable<T>
): T | undefined => {
  const iter = [...iterable];

  for (let i = iter.length - 1; i >= 0; i--) {
    const value = iter[i];
    if (predicate(value, i)) {
      return value;
    }
  }

  return undefined;
};
