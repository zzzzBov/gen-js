module.exports = (...items) => function * (gen) {
  yield * items
  yield * gen
}
