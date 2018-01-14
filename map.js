module.exports = transform => {
  if (transform instanceof Function) {
    return function* (gen) {
      let i = 0
      for (const value of gen) {
        yield transform(value, i++)
      }
    }
  } else {
    throw new TypeError(`"transform" parameter must be a function.`)
  }
}
