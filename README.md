# Gen

`@zzzzbov/gen` is a package of generator utility functions to make working with collections easier. It is specifically designed to be used with the proposed pipeline operator (`|>`). If the pipeline operator isn't available, `gen` includes a `pipe` function which can be used instead.

## Installation

```txt
npm i @zzzzbov/gen
```

## API

### `all`

`gen.all([test])(iterator)`

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

### `any`

`gen.any([test])(iterator)`

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

### `append`

`gen.append(...items)(iterator)`

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

### `concat`

`gen.concat(...collections)(iterator)`

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

### `filter`

`gen.filter(test)(iterator)`

The `filter` function takes a `test` function as a parameter and produces a new generator function. The new function accepts an `iterator` as a parameter and yields every item in the `iterator` that passes the `test`.

#### Example

```js
const filter = require('@zzzzbov/gen/filter')

const odd = n => n % 2

const example = [1, 2, 3] |> filter(odd)
[...example] // [1, 3]
```

### `integers`

`gen.integers([start], [end])`

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

### `map`

`gen.map(transform)(iterator)`

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

### `mapMany`

`gen.mapMany(transform)(iterator)`

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

### `pipe`

`gen.pipe(input, ...functions)`

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

### `prepend`

`gen.prepend(...items)(iterator)`

```js
const {prepend} = require('@zzzzbov/gen')
// or
const prepend = require('@zzzzbov/gen/prepend')
```

The `prepend` function takes a collection of `items` as parameters and produces a new generator function. The new function accepts an `iterator` as a parameter and yields the `items` followed by the `iterator`.

#### Example

```js
const prepend = require('@zzzzbov/gen/prepend')

const example = [4, 5, 6] |> prepend(1, 2, 3)
[...example] // [1, 2, 3, 4, 5, 6]
```

### `reduce`

`gen.reduce(reducer, initial)(iterator)`

The `reduce` function takes a `reducer` function and `initial` value as parameters and produces a new function. The new function accepts an `iterator` as a parameter and returns the resultant reduction after having passed each value through the reducer along with the output from the previous value.

#### Example

```js
const reduce = require('@zzzzbov/gen/reduce')

const add = (a, b) => a + b

const example = [1, 2, 3] |> reduce(add, 0) // 6
```

### `skip`

`gen.skip(count)(iterator)`

```js
const {skip} = require('@zzzzbov/gen')
// or
const skip = require('@zzzzbov/gen/skip')
```

The `skip` function takes a `count` parameter and produces a new generator function. The new function accepts an `iterator` as a parameter and skips the first `count` items in the `iterator` before yielding the rest of the items in `iterator`.

#### Example

```js
const skip = require('@zzzzbov/gen/skip')

const example = [1, 2, 3, 4, 5] |> skip(2)
[...example] // [3, 4, 5]
```

### `skipWhile`

`gen.skipWhile(test)(iterator)`

```js
const {skipWhile} = require('@zzzzbov/gen')
// or
const skipWhile = require('@zzzzbov/gen/skipWhile')
```

The `skipWhile` function takes a `test` function as a parameter and produces a new generator function. The new function accepts an `iterator` as a parameter and skips items in the `iterator` until the `test` is failed.

#### Example

```js
const skipWhile = require('@zzzzbov/gen/skipWhile')

const lessThanThree = n => n < 3

const example = [1, 2, 3, 4, 5] |> skipWhile(lessThanThree)
[...example] // [3, 4, 5]
```

### `take`

`gen.take(count)(iterator)`

```js
const {take} = require('@zzzzbov/gen')
// or
const take = require('@zzzzbov/gen/take')
```

The `take` function takes a `count` parameter and produces a new generator function. The new function accepts an `iterator` as a parameter and yields the first `count` items in the `iterator`.

#### Example

```js
const take = require('@zzzzbov/gen/take')

const example = [1, 2, 3, 4, 5] |> take(3)
[...example] // [1, 2, 3]
```

### `takeWhile`

`gen.takeWhile(test)(iterator)`

```js
const {takeWhile} = require('@zzzzbov/gen')
// or
const takeWhile = require('@zzzzbov/gen/takeWhile')
```

The `takeWhile` function takes a `test` function as a parameter and produces a new generator function. The new function accepts an `iterator` as a parameter and yields items in the `iterator` until the `test` is failed.

#### Example

```js
const takeWhile = require('@zzzzbov/gen/takeWhile')

const lessThanThree = n => n < 3

const example = [1, 2, 3, 4, 5] |> takeWhile(lessThanThree)
[...example] // [1, 2]
```

### `unique`

`gen.unique(iterator)`

```js
const {unique} = require('@zzzzbov/gen')
// or
const unique = require('@zzzzbov/gen/unique')
```

The `unique` generator function takes an `iterator` and yields each unique value in the order they appear in the `iterator`.

#### Example

```js
const unique = require('@zzzzbov/gen/unique')

const example = [1, 2, 1, 3, 1] |> unique
[...example] // [1, 2, 3]
```
