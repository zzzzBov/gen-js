module.exports = (reducer, initial) => {
  if (reducer instanceof Function) {
    return gen => {
      let result = initial
      let i = 0
      for (const value of gen) {
        result = reducer(result, value, i++)
      }
      return result
    }
  } else {
    throw new TypeError(`"reducer" parameter must be a function.`)
  }
}
