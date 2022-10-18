import { increment } from 'engine/store/modules/counter/slice';
import { renderWithProviders } from 'helpers/renderWithProvider';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';

import { Counter } from 'components/Counter';

describe('Counter methods', () => {
  test('increment', () => {
    renderWithProviders(<Counter />);
    const incrementBtn = screen.getByTestId('btn-increment');

    expect(screen.getByTestId('counter-value').textContent).toBe('0');
    userEvent.click(incrementBtn);
    expect(screen.getByTestId('counter-value').textContent).toBe('1');
  });

  test('decrement', () => {
    renderWithProviders(<Counter />);
    const decrementBtn = screen.getByTestId('btn-decrement');

    expect(screen.getByTestId('counter-value').textContent).toBe('0');
    userEvent.click(decrementBtn);
    expect(screen.getByTestId('counter-value').textContent).toBe('-1');
  });

});