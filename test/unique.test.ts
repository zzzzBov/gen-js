import { infinite } from '../src/infinite';
import { integers } from '../src/integers';
import { interleave } from '../src/interleave';
import { pipe } from '../src/pipe';
import { take } from '../src/take';
import { toArray } from '../src/toArray';
import { unique } from '../src/unique';

describe(`unique(iterable)`, () => {
  it(`should find unique values within an iterable`, () => {
    const output = [...unique([1, 2, 1, 3, 1, 4, 1, 5])];

    expect(output).toEqual([1, 2, 3, 4, 5]);
  });

  it(`not time out with infinite iterables`, () => {
    const output = pipe(
      integers(1),
      interleave(infinite(1)),
      unique,
      take(5),
      toArray
    );

    expect(output).toEqual([1, 2, 3, 4, 5]);
  });
});
