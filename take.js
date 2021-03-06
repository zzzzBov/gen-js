module.exports = count => {
  if (isNaN(count)) {
    throw new TypeError(`"count" parameter must be a number.`)
  } else if (count < 0) {
    throw new RangeError(`"count" parameter must not be negative.`)
  } else {
    return function * (gen) {
      let i = 0
      for (const value of gen) {
        if (i++ < count) {
          yield value
        } else {
          break
        }
      }
    }
  }
}
