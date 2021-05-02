import { yeet } from './yeet';

export const take = <T>(count: number) =>
  count < 0
    ? yeet(new RangeError(`"count" must not be negative.`))
    : function*(iterable: Iterable<T>) {
        let i = 0;
        for (const value of iterable) {
          if (i++ < count) {
            yield value;
          } else {
            break;
          }
        }
      };
