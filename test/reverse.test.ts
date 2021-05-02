import { reverse } from '../src/reverse';

describe(`reverse(iterable)`, () => {
  it(`should reverse an iterable`, () => {
    const result = [...reverse([1, 2, 3])];

    expect(result).toEqual([3, 2, 1]);
  });
});
