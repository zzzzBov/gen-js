export const integers = function*(start = 0, end = Number.MAX_SAFE_INTEGER) {
  if (start < end) {
    for (let i = start; i <= end; ++i) {
      yield i;
    }
  } else {
    for (let i = start; i >= end; --i) {
      yield i;
    }
  }
};
