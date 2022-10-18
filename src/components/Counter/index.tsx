import React from 'react';

import { useCounter } from 'components/Counter/hook/useCounter';


export const Counter = () => {
  const {
    counter,
    decrementHandler,
    incrementHandler
  } = useCounter(20);

  return (
      <>
        <button data-testid="btn-decrement" onClick={decrementHandler}>-</button>
        <span data-testid="counter-value">{counter}</span>
        <button data-testid="btn-increment" onClick={incrementHandler}>+</button>
      </>
  );
};