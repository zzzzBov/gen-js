import { walkMany, WalkDirection } from '../src/walkMany';

describe(`walkMany(transform, direction)(initial)`, () => {
  it(`should walk through a tree of data`, () => {
    type Leaf = { children: Leaf[] };
    const tree = {
      name: '0',
      children: [
        {
          name: '0.0',
          children: [
            {
              name: '0.0.0',
              children: [],
            },
            {
              name: '0.0.1',
              children: [],
            },
          ],
        },
        {
          name: '0.1',
          children: [
            {
              name: '0.1.0',
              children: [],
            },
            {
              name: '0.1.1',
              children: [],
            },
          ],
        },
      ],
    };
    const result = [...walkMany<Leaf>(x => x.children)(tree)].map(x => x.name);

    expect(result).toEqual([
      '0',
      '0.0',
      '0.1',
      '0.0.0',
      '0.0.1',
      '0.1.0',
      '0.1.1',
    ]);
  });

  it(`should walk through a tree of data using depth-first search`, () => {
    type Leaf = { children: Leaf[] };
    const tree = {
      name: '0',
      children: [
        {
          name: '0.0',
          children: [
            {
              name: '0.0.0',
              children: [],
            },
            {
              name: '0.0.1',
              children: [],
            },
          ],
        },
        {
          name: '0.1',
          children: [
            {
              name: '0.1.0',
              children: [],
            },
            {
              name: '0.1.1',
              children: [],
            },
          ],
        },
      ],
    };
    const result = [
      ...walkMany<Leaf>(x => x.children, WalkDirection.DepthFirst)(tree),
    ].map(x => x.name);

    expect(result).toEqual([
      '0',
      '0.0',
      '0.0.0',
      '0.0.1',
      '0.1',
      '0.1.0',
      '0.1.1',
    ]);
  });
});
