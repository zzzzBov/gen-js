import { count } from '../src/count';

describe(`count(iterable)`, () => {
  it.each`
    input           | expected
    ${[]}           | ${0}
    ${[1]}          | ${1}
    ${[1, 2, 3, 4]} | ${4}
  `(`should count $expected items`, ({ input, expected }) => {
    const output = count(input);

    expect(output).toBe(expected);
  });
});
