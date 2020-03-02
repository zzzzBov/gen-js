export interface IReducer<T, U = T> {
  (previous: U | undefined, next: T, index: number): U
}
