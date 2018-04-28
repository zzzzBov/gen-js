module.exports = (start, deleteCount, ...items) => {
  if (isNaN(start)) {
    throw new TypeError(`"start" parameter must be a number.`)
  } else if (start < 0) {
    throw new RangeError(`"start" parameter must not be negative.`)
  } else if (isNaN(deleteCount)) {
    throw new TypeError(`"deleteCount" parameter must be a number.`)
  } else if (deleteCount < 0) {
    throw new RangeError(`"deleteCount" parameter must not be negative.`)
  } else {
    const end = start + deleteCount

    return function * (gen) {
      let i = 0
      for (const value of gen) {
        if (i < start) {
          yield value
        } else if (i === start) {
          yield * items
        }

        if (i >= end) {
          yield value
        }

        i += 1
      }

      if (start >= i) {
        yield * items
      }
    }
  }
}
