export const append = <T>(...items: T[]) =>
  function*(iterable: Iterable<T>) {
    yield* iterable;
    yield* items;
  };
