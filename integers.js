module.exports = function* (start = 0, end = Number.MAX_SAFE_INTEGER) {
  if (start < end) {
    for (let i = start; i <= end; i += 1) {
      yield i
    }
  } else {
    for (let i = start; i >= end; i -= 1) {
      yield i
    }
  }
}
