export const reverse = function* reverse<T>(iterable: Iterable<T>) {
  yield* [...iterable].reverse();
};
