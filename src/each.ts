import type { IPredicate } from './IPredicate';

export const each = <T>(predicate: IPredicate<T>) => (
  iterable: Iterable<T>
) => {
  const buffer = [];
  let i = 0;
  for (const value of iterable) {
    predicate(value, i++);
    buffer.push(value);
  }

  return (function*() {
    yield* buffer;
  })();
};
