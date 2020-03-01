export const append = <T>(...items: T[]) => function * (iter: Iterable<T>) {
  yield * iter
  yield * items
}
