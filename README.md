# Gen

`@zzzzbov/gen` is a package of generator utility functions to make working with collections easier. It is specifically designed to be used with the proposed pipeline operator (`|>`). If the pipeline operator isn't available, `gen` includes a `pipe` function which can be used instead.

## Installation

```txt
npm i @zzzzbov/gen
```

## API

### `gen.all([test])(iterator)`

```js
const {all} = require('@zzzzbov/gen')
// or
const all = require('@zzzzbov/gen/all')
```

The `all` function takes an optional `test` function as a parameter and produces a new function. The new function accepts an `iterator` as a parameter and returns `true` if every member of `iterator` passes the `test` and `false` if any member of `iterator` does not pass the `test`.

#### Example

```js
const all = require('@zzzzbov/gen/all')

const odd = n => n % 2

const example1 = [1, 2, 3] |> all(odd) // false

const example2 = [1, 3, 5] |> all(odd) // true
```

If no `test` is passed, a false function is used (`_ => false`). This allows `all` to be used to check for empty collections in parity with `any`.

#### Example

```js
const all = require('@zzzzbov/gen/all')

const example1 = [] |> all() // true

const example2 = [1, 2, 3] |> all() // false
```

### `gen.any([test])(iterator)`

```js
const {any} = require('@zzzzbov/gen')
// or
const any = require('@zzzzbov/gen/any')
```

The `any` function takes an optional `test` function as a parameter and produces a new function. The new function accepts an `iterator` as a parameter and returns `true` if any member of `iterator` passes the `test` and `false` if every member of `iterator` fails the `test`.

#### Example

```js
const any = require('@zzzzbov/gen/any')

const odd = n => n % 2

const example1 = [1, 2, 3] |> any(odd) // true

const example2 = [2, 4, 6] |> any(odd) // false
```

If no `test` is passed, a `true` function is used (`_ => true`). This allows `any` to be used to check if the collection is empty.

#### Example

```js
const any = require('@zzzzbov/gen/any')

const example1 = [] |> any() // false

const example2 = [1, 2, 3] |> any() // true
```

### `gen.append(...items)(iterator)`

```js
const {append} = require('@zzzzbov/gen')
// or
const append = require('@zzzzbov/gen/append')
```

The `append` function takes a collection of `items` as parameters and produces a new generator function. The new function accepts an `iterator` as a parameter and yields the entire `iterator` followed by all the `items`.

#### Example

```js
const append = require('@zzzzbov/gen/append')

const example = [1, 2, 3] |> append(4, 5, 6)
[...example] // [1, 2, 3, 4, 5, 6]
```

### `gen.concat(...collections)(iterator)`

```js
const {concat} = require('@zzzzbov/gen')
// or
const concat = require('@zzzzbov/gen/concat')
```

The `concat` function takes a collection of `collection` as parameters and produces a new generator function. The new function accepts an `iterator` as a parameter and yields the entire `iterator` followed by the contents of each of the `collections`.

#### Example

```js
const concat = require('@zzzzbov/gen/concat')

const example = [1, 2, 3] |> concat([4, 5, 6], [7, 8, 9])
[...example] // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### `gen.filter(test)(iterator)`

The `filter` function takes a `test` function as a parameter and produces a new generator function. The new function accepts an `iterator` as a parameter and yields every item in the `iterator` that passes the `test`.

#### Example

```js
const filter = require('@zzzzbov/gen/filter')

const odd = n => n % 2

const example = [1, 2, 3] |> filter(odd)
[...example] // [1, 3]
```

### `gen.integers([start], [end])`

```js
const {integers} = require('@zzzzbov/gen')
// or
const integers = require('@zzzzbov/gen/integers')
```

The `integers` generator function takes optional `start` and `end` parameters. `integers` yields the integers from `start` to `end` *inclusive*.

```js
const integers = require('@zzzzbov/gen/integers')

const example = integers(1, 5)
[...example] // [1, 2, 3, 4, 5]
```

`start` defaults to `0`

`end` defaults to `Number.MAX_SAFE_INTEGER`

Given that `Number.MAX_SAFE_INTEGER` is exceptionally large, iterating over `integers` without an explicit end may result in an, effectively, endless loop.

For generating a specific number of integers, pair the `integers` function with the `take` function:

#### Example

```js
const {integers, take} = require('@zzzzbov/gen')

const example = integers() |> take(5)
[...example] // [0, 1, 2, 3, 4]
```

### `gen.map(transform)(iterator)`

```js
const {map} = require('@zzzzbov/gen')
// or
const map = require('@zzzzbov/gen/map')
```

The `map` function takes a `transform` function as a parameter and produces a new generator function. The new function accepts an `iterator` as a parameter and yields each item produced by the `transform`.

#### Example

```js
const map = require('@zzzzbov/gen/map')

const double = n => n * 2

const example = [1, 2, 3] |> map(double)
[...example] // [2, 4, 6]
```

### `gen.mapMany(transform)(iterator)`

```js
const {mapMany} = require('@zzzzbov/gen')
// or
const mapMany = require('@zzzzbov/gen/mapMany')
```

The `mapMany` function takes a `transform` function as a parameter and produces a new generator function. The new function accepts an `iterator` as a parameter and yields each item in each collection produced by the `transform`.

#### Example

```js
const mapMany = require('@zzzzbov/gen/mapMany')

const pair = n => [n, -n]

const example = [1, 2, 3] |> mapMany(pair)
[...example] // [1, -1, 2, -2, 3, -3]
```

### `gen.pipe(input, ...functions)`

```js
const {pipe} = require('@zzzzbov/gen')
// or
const pipe = require('@zzzzbov/gen/pipe')
```

The `pipe` function is a utility to act as a stand-in for the pipe operator (`|>`).

The `pipe` function takes an `input` value and a collection of `functions` and produces the resultant value of passing the output of each function as the input of the subsequent function.

#### Example

```js
const pipe = require('@zzzzbov/gen/pipe')

const addOne = n => n + 1

const double = n => n * 2

const example = pipe(
  5,
  addOne,
  double
) // 12
```

