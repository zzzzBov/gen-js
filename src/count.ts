export const count = <T>(iterable: Iterable<T>): number => {
  let i = 0
  for (const _ of iterable) {
    i++
  }
  return i
}
