module.exports = test => {
  if (test instanceof Function) {
    return function * (gen) {
      let i = 0
      let skipping = true
      for (const value of gen) {
        if (!skipping || !(skipping = test(value, i++))) {
          yield value
        }
      }
    }
  } else {
    throw new TypeError(`"test" parameter must be a function.`)
  }
}
