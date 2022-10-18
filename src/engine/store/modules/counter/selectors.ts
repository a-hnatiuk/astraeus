import type { RootState } from "engine/store/index";

export const counterSelectors = {
  counter: (state: RootState) => state.counter.value,
}