module.exports = (...collections) => function * (gen) {
  yield * gen
  for (const collection of collections) {
    yield * collection
  }
}
