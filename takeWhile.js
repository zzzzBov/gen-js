module.exports = test => {
  if (test instanceof Function) {
    return function * (gen) {
      let i = 0
      for (const value of gen) {
        if (test(value, i++)) {
          yield value
        } else {
          break
        }
      }
    }
  } else {
    throw new TypeError(`"test" parameter must be a function.`)
  }
}
