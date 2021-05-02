import { toArray } from '../src/toArray';

describe(`toArray(iterable)`, () => {
  it(`should convert an iterable into an array`, () => {
    function* iter(...items: any[]) {
      yield* items;
    }

    const output = toArray(iter(1, 2, 3));

    expect(output).toEqual([1, 2, 3]);
  });
});
