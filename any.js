module.exports = (test = _ => true) => {
  if (test instanceof Function) {
    return gen => {
      let i = 0
      for (const value of gen) {
        if (test(value, i++)) {
          return true
        }
      }
      return false
    }
  } else {
    throw new TypeError(`"test" parameter must be a function.`)
  }
}
