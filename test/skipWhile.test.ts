import { skipWhile } from '../src/skipWhile';

describe(`skipWhile(predicate)(iterable)`, () => {
  it(`should skip until the predicate returns a falsey value`, () => {
    const output = [...skipWhile<number>(x => x < 4)([1, 2, 3, 4, 5, 6])];

    expect(output).toEqual([4, 5, 6]);
  });
});
