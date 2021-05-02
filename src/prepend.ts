export const prepend = <T>(...items: T[]) =>
  function*(iterable: Iterable<T>) {
    yield* items;
    yield* iterable;
  };
