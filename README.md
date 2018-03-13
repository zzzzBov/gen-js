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

