import { last } from '../src/last';

describe(`last(predicate)(iterable)`, () => {
  it(`should use a "true" function if no function is passed`, () => {
    const tail = last();

    const undefinedResult = tail([]);

    expect(undefinedResult).toBeUndefined();

    const oneResult = tail([3, 2, 1]);

    expect(oneResult).toBe(1);
  });

  it(`should check if any values match the provided test, and return the last one`, () => {
    const lastOdd = last((x: number) => x % 2);

    const undefinedResult = lastOdd([2, 4, 6]);

    expect(undefinedResult).toBeUndefined();

    const fiveResult = lastOdd([2, 3, 4, 5, 6]);

    expect(fiveResult).toBe(5);
  });
});
