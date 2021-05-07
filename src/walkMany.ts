import type { ITransform } from './ITransform';

export enum WalkDirection {
  BreadthFirst,
  DepthFirst,
}

export const walkMany = <T>(
  transform: ITransform<T, Iterable<T>>,
  direction = WalkDirection.BreadthFirst
) =>
  function*(initial: T) {
    const iterators: Iterator<T>[] = [
      (function*() {
        yield initial;
      })(),
    ];

    for (let i = 0; iterators.length; ) {
      const index =
        direction === WalkDirection.BreadthFirst ? 0 : iterators.length - 1;
      const { done, value } = iterators[index].next();
      if (done) {
        iterators.splice(index, 1);
      } else {
        yield value;
        iterators.push(transform(value, i++)[Symbol.iterator]());
      }
    }
  };
