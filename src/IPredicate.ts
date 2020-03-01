export interface IPredicate<T> {
  (value: T, index: number): unknown;
}
