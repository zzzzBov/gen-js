import { interceptEach } from '../src/interceptEach';

describe(`interceptEach(predicate)(iterable)`, () => {
  it(`should intercept each item in the iterable`, () => {
    const callback = jest.fn();

    const gen = interceptEach(callback)('abc'.split(''));

    let next = gen.next();

    expect(next.value).toBe('a');
    expect(next.done).toBe(false);

    expect(callback.mock.calls).toEqual([['a', 0]]);

    next = gen.next();

    expect(next.value).toBe('b');
    expect(next.done).toBe(false);

    expect(callback.mock.calls).toEqual([
      ['a', 0],
      ['b', 1],
    ]);

    next = gen.next();

    expect(next.value).toBe('c');
    expect(next.done).toBe(false);

    expect(callback.mock.calls).toEqual([
      ['a', 0],
      ['b', 1],
      ['c', 2],
    ]);

    next = gen.next();

    expect(next.value).toBeUndefined;
    expect(next.done).toBe(true);
  });
});
