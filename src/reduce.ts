import { IReducer } from './IReducer';

export const reduce = <T, U = T>(reducer: IReducer<T, U>, initial?: U) => (
  (iterable: Iterable<T>) => {
    let result = initial
    let i = 0
    for (const value of iterable) {
      result = reducer(result, value, i++)
    }
    return result
  }
)
