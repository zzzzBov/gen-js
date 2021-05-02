import { ITransform } from './ITransform';

// TODO:
//
// Update `walk`s signature to allow for overloads such that when `walk` is
// called without a `final` value, the transform doesn't need to account for
// `undefined`.
//
// I.E.
// `walk(x => x.parent)({parent: {}})` should work without complaint.
//
// Likewise, `walk(x => x + 1, 5)(0)` should also work.

export const walk = <T, U = undefined>(
  transform: ITransform<T, T | U>,
  final: U
) =>
  function*(initial: T) {
    for (
      let value: T | U = initial, i = 0;
      value !== final;
      value = transform(value as T, i++)
    ) {
      yield value;
    }
  };
