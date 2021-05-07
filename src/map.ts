import type { ITransform } from './ITransform';

export const map = <T, U = T>(transform: ITransform<T, U>) =>
  function*(iterable: Iterable<T>) {
    let i = 0;
    for (const value of iterable) {
      yield transform(value, i++);
    }
  };
