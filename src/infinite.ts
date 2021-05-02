import { yeet } from './yeet';

export const infinite = <T>(...items: T[]) =>
  !items.length
    ? yeet(new Error(`"items" cannot be empty`))
    : (function* infinite() {
        for (;;) {
          yield* items;
        }
      })();
