import { any } from '../src/any';

describe(`any(predicate)(iterable)`, () => {
  it(`should use a "true" function if no function is passed`, () => {
    const some = any();

    const falseResult = some([]);

    expect(falseResult).toBe(false);

    const trueResult = some([1]);

    expect(trueResult).toBe(true);
  });

  it(`should check if any values match the provided test`, () => {
    const anyOdd = any<number>(x => x % 2);

    const falseResult = anyOdd([2, 4, 6]);

    expect(falseResult).toBe(false);

    const trueResult = anyOdd([2, 3, 4]);

    expect(trueResult).toBe(true);
  });
});
