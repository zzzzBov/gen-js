import { reduce } from '../src/reduce';

describe(`reduce(reducer, initial)(iterable)`, () => {
  it(`should reduce a collection to a single value using the provided reducer`, () => {
    const output = reduce<number>((acc = 0, v) => acc + v)([1, 2, 3]);

    expect(output).toBe(6);
  });

  it(`should seed the reduction using the "initial" value`, () => {
    const output = reduce<number>((acc = 0, v) => acc + v, 10)([1, 2, 3]);

    expect(output).toBe(16);
  });
});
