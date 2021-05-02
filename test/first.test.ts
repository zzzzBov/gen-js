import { first } from '../src/first';

describe(`first(predicate)(iterable)`, () => {
  it(`should use a "true" function if no function is passed`, () => {
    const head = first();

    const undefinedResult = head([]);

    expect(undefinedResult).toBeUndefined();

    const oneResult = head([1]);

    expect(oneResult).toBe(1);
  });

  it(`should check if any values match the provided test`, () => {
    const firstOdd = first((x: number) => x % 2);

    const undefinedResult = firstOdd([2, 4, 6]);

    expect(undefinedResult).toBeUndefined();

    const threeResult = firstOdd([2, 3, 4]);

    expect(threeResult).toBe(3);
  });
});