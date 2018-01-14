const all = require('./all')

module.exports = (comparator = (a, b) => a === b) => {
  if (comparator instanceof Function) {
    return function * (gen) {
      const values = []
      for (const value of gen) {
        if (all(v => !comparator(v, value))(values)) {
          values.push(value)
          yield value
        }
      }
    }
  } else {
    throw new TypeError(`"comparator" parameter must be a function.`)
  }
}
