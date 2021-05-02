import { integers } from '../src/integers';

describe(`integers(start, end)`, () => {
  it(`should create a generator that counts from "start" to "end"`, () => {
    const output = [...integers(1, 5)];

    expect(output).toEqual([1, 2, 3, 4, 5]);
  });

  it(`should count down if "start" is greater than "end"`, () => {
    const output = [...integers(5, 1)];

    expect(output).toEqual([5, 4, 3, 2, 1]);
  });
});
