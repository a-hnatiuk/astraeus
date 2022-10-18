import React, { PropsWithChildren } from 'react'
import { render } from '@testing-library/react'
import type { RenderOptions } from '@testing-library/react'
import type { PreloadedState } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import { setupStore } from 'engine/store'
import type { AppStore, RootState } from 'engine/store'
import { initialState } from 'engine/store/modules/counter/slice';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>
  store?: AppStore
}

/** Wraps component into Provider. Needs for testing.
 *
 * https://redux.js.org/usage/writing-tests
 *
 * @example  renderWithProviders(<YourComponent />);
 * */
export function renderWithProviders(
    ui: React.ReactElement,
    {
      preloadedState = {
        counter: initialState
      },
      store = setupStore(preloadedState),
      ...renderOptions
    }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}