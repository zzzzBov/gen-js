module.exports = (test = _ => false) => {
  if (test instanceof Function) {
    return gen => {
      let i = 0
      for (const value of gen) {
        if (!test(value, i++)) {
          return false
        }
      }
      return true
    }
  } else {
    throw new TypeError(`"test" parameter must be a function.`)
  }
}
