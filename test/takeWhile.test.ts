import { takeWhile } from '../src/takeWhile';

describe(`takeWhile(predicate)(iterable)`, () => {
  it(`should take until the predicate returns a falsey value`, () => {
    const output = [...takeWhile<number>(x => x < 4)([1, 2, 3, 4, 5])];

    expect(output).toEqual([1, 2, 3]);
  });
});
