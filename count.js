/* eslint no-unused-vars: ["error", {"varsIgnorePattern": "ignored"}] */

module.exports = gen => {
  let i = 0
  for (const ignored of gen) {
    i += 1
  }
  return i
}
