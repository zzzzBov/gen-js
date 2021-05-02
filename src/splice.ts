import { yeet } from './yeet';

export const splice = <T>(start: number, deleteCount: number, ...items: T[]) =>
  start < 0
    ? yeet(new RangeError(`"start" must not be negative.`))
    : deleteCount < 0
    ? yeet(new RangeError(`"deleteCount" must not be negative.`))
    : function*(iterable: Iterable<T>) {
        const end = start + deleteCount;

        let i = 0;
        for (const value of iterable) {
          if (i < start) {
            yield value;
          } else if (i === start) {
            yield* items;
          }

          if (i >= end) {
            yield value;
          }

          ++i;
        }

        if (start >= i) {
          yield* items;
        }
      };
