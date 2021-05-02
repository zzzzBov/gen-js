import { walk } from '../src/walk';

describe(`walk(transform, final)(initial)`, () => {
  it(`should generate values by recursively transforming the initial value`, () => {
    const result = [...walk(x => x + 1, 5)(0)];

    expect(result).toEqual([0, 1, 2, 3, 4]);
  });

  it(`should stop generating values when the final parameter is reached`, () => {
    interface Child {
      parent?: Child;
    }
    const initial = {
      parent: {
        parent: {
          parent: {},
        },
      },
    };
    const result = [...walk((x: Child) => x.parent, undefined)(initial)];

    expect(result).toEqual([
      initial,
      initial.parent,
      initial.parent.parent,
      initial.parent.parent.parent,
    ]);
  });
});
