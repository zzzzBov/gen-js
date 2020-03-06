export const infinite = <T>(...items: T[]) => {
  function * infinite () {
    for (;;) {
      yield * items
    }
  }

  if (!items.length) {
    throw new Error(`"items" cannot be empty`)
  }

  return infinite()
}
