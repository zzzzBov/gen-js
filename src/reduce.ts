import type { IReducer } from './IReducer';

export const reduce: {
  <T, U = T>(reducer: IReducer<T, U>, initial: U): (iterable: Iterable<T>) => U;
  <T, U = T>(reducer: IReducer<T, U | undefined>): (iterable: Iterable<T>) => U;
} = <T, U = T>(reducer: unknown, initial?: unknown) => (
  iterable: Iterable<T>
) => {
  if (typeof initial === 'undefined') {
    const red = reducer as IReducer<T, U | undefined>;
    let result: U | undefined = initial,
      i = 0;
    for (const value of iterable) {
      result = red(result, value, i++);
    }
    return result;
  } else {
    const red = reducer as IReducer<T, U>;
    let result = initial as U,
      i = 0;
    for (const value of iterable) {
      result = red(result, value, i++);
    }
    return result;
  }
};
