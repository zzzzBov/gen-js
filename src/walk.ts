import { ITransform } from './ITransform';

export const walk: {
  <T>(transform: ITransform<T, T>, final: T): (initial: T) => Iterable<T>;
  <T>(transform: ITransform<T, T | undefined>): (initial: T) => Iterable<T>;
} = <T>(transform: unknown, final?: unknown) =>
  function*(initial: T) {
    if (typeof final === 'undefined') {
      const tx = transform as ITransform<T, T | undefined>;
      for (
        let value: T | undefined = initial, i = 0;
        value !== final;
        value = tx(value, i++)
      ) {
        yield value;
      }
    } else {
      const tx = transform as ITransform<T, T>;
      for (
        let value = initial, i = 0;
        value !== final;
        value = tx(value, i++)
      ) {
        yield value;
      }
    }
  };
