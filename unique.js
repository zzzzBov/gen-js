module.exports = function * (gen) {
  yield * new Set(gen)
}
