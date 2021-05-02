export interface IReducer<T, U = T> {
  (previous: U, next: T, index: number): U;
}
