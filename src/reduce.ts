import { IReducer } from './IReducer';

// TODO:
// Update `reduce`s signature to allow for overloads such that when `reduce` is
// called with an initial value, the reducer does not need to account for
// undefined.
//
// I.E.
// `reduce((acc, v) => acc + v, 0)([1, 2, 3])` should work without complaining
// that `acc` is potentially undefined.
//
// Meanwhile, `reduce((acc = 0, v) => acc + v)([1, 2, 3])` should also work.
export const reduce = <T, U = T>(
  reducer: IReducer<T, U | undefined>,
  initial?: U
) => (iterable: Iterable<T>) => {
  let result = initial;
  let i = 0;
  for (const value of iterable) {
    result = reducer(result, value, i++);
  }
  return result;
};
