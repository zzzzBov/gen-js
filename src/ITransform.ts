export interface ITransform<T, U> {
  (value: T, index: number): U;
}
