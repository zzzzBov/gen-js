export function pipe<IN>(
  input: IN
): IN

export function pipe<IN, OUT>(
  input: IN,
  fn1: (input: IN) => OUT
): OUT

export function pipe<IN, F1, OUT>(
  input: IN,
  fn1: (input: IN) => F1,
  fn2: (input: F1) => OUT
): OUT

export function pipe<IN, F1, F2, OUT>(
  input: IN,
  fn1: (input: IN) => F1,
  fn2: (input: F1) => F2,
  fn3: (input: F2) => OUT
): OUT

export function pipe<IN, F1, F2, F3, OUT>(
  input: IN,
  fn1: (input: IN) => F1,
  fn2: (input: F1) => F2,
  fn3: (input: F2) => F3,
  fn4: (input: F3) => OUT
): OUT

export function pipe<IN, F1, F2, F3, F4, OUT>(
  input: IN,
  fn1: (input: IN) => F1,
  fn2: (input: F1) => F2,
  fn3: (input: F2) => F3,
  fn4: (input: F3) => F4,
  fn5: (input: F4) => OUT
): OUT

export function pipe<IN, F1, F2, F3, F4, F5, OUT>(
  input: IN,
  fn1: (input: IN) => F1,
  fn2: (input: F1) => F2,
  fn3: (input: F2) => F3,
  fn4: (input: F3) => F4,
  fn5: (input: F4) => F5,
  fn6: (input: F5) => OUT
): OUT

export function pipe<IN, F1, F2, F3, F4, F5, F6, OUT>(
  input: IN,
  fn1: (input: IN) => F1,
  fn2: (input: F1) => F2,
  fn3: (input: F2) => F3,
  fn4: (input: F3) => F4,
  fn5: (input: F4) => F5,
  fn6: (input: F5) => F6,
  fn7: (input: F6) => OUT
): OUT

export function pipe<IN, F1, F2, F3, F4, F5, F6, F7, OUT>(
  input: IN,
  fn1: (input: IN) => F1,
  fn2: (input: F1) => F2,
  fn3: (input: F2) => F3,
  fn4: (input: F3) => F4,
  fn5: (input: F4) => F5,
  fn6: (input: F5) => F6,
  fn7: (input: F6) => F7,
  fn8: (input: F7) => OUT
): OUT

export function pipe<IN, F1, F2, F3, F4, F5, F6, F7, F8, OUT>(
  input: IN,
  fn1: (input: IN) => F1,
  fn2: (input: F1) => F2,
  fn3: (input: F2) => F3,
  fn4: (input: F3) => F4,
  fn5: (input: F4) => F5,
  fn6: (input: F5) => F6,
  fn7: (input: F6) => F7,
  fn8: (input: F7) => F8,
  fn9: (input: F8) => OUT
): OUT

export function pipe<IN, F1, F2, F3, F4, F5, F6, F7, F8, F9, OUT>(
  input: IN,
  fn1: (input: IN) => F1,
  fn2: (input: F1) => F2,
  fn3: (input: F2) => F3,
  fn4: (input: F3) => F4,
  fn5: (input: F4) => F5,
  fn6: (input: F5) => F6,
  fn7: (input: F6) => F7,
  fn8: (input: F7) => F8,
  fn9: (input: F8) => F9,
  fn10: (input: F9) => OUT
): OUT

export function pipe(input: any, ...functions: Function[]): any {
  return functions.reduce((next, fn) => fn(next), input)
}
