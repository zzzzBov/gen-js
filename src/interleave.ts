export const interleave = <T>(...iterables: Iterable<T>[]) => (
  function * (iterable: Iterable<T>) {
    const iterators = [
      iterable[Symbol.iterator](),
      ...iterables.map(iter => iter[Symbol.iterator]())
    ]

    // while there are iterators
    while (iterators.length) {
      // walk through each iterator and yield each value
      for (let i = 0; i < iterators.length; i++) {
        const iterator = iterators[i]

        const next = iterator.next()

        // if the iterator is done
        if (next.done) {
          // remove the iterator from the list
          iterators.splice(i, 1)
          // repeat the index that was just used
          --i
        } else {
          // otherwise yield the value
          yield next.value
        }
      }
    }
  }
)
