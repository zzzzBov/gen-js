import { filter } from '../src/filter';

describe(`filter(predicate)(iterable)`, () => {
  it(`should filter out values that don't match the provided predicate`, () => {
    const output = [...filter<number>(x => x % 2)([1, 2, 3, 4, 5])];

    expect(output).toEqual([1, 3, 5]);
  });
});
