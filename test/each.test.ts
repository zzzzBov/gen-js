import { each } from '../src/each';

describe(`each(predicate)(iterable)`, () => {
  it(`should iterate over each item in the iterable`, () => {
    const callback = jest.fn();

    const gen = each(callback)('abcdef'.split(''));

    expect(callback.mock.calls).toEqual([
      ['a', 0],
      ['b', 1],
      ['c', 2],
      ['d', 3],
      ['e', 4],
      ['f', 5],
    ]);

    const result = [...gen];

    expect(result).toEqual(['a', 'b', 'c', 'd', 'e', 'f']);
  });
});
