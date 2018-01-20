module.exports = (...items) => function * (gen) {
  yield * gen
  yield * items
}
