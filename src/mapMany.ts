import type { ITransform } from './ITransform';

export const mapMany = <T, U = T>(transform: ITransform<T, Iterable<U>>) =>
  function*(iterable: Iterable<T>) {
    let i = 0;
    for (const value of iterable) {
      yield* transform(value, i++);
    }
  };
