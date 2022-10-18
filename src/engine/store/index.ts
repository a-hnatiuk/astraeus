import { configureStore, PreloadedState } from '@reduxjs/toolkit';

import { rootReducer } from 'engine/store/rootReducer';
import { timer } from 'engine/middleware/timer';

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    middleware: [timer],
    preloadedState
  })
}

export type RootState = {
  counter: {
    value: number;
    step: number;
  }
};
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
