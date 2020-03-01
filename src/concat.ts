export const concat = <T>(...collections: Iterable<T>[]) => function * (iterable: Iterable<T>) {
  yield * iterable
  for (const collection of collections) {
    yield * collection
  }
}
