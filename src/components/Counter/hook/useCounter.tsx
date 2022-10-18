import { useAppDispatch, useAppSelector } from 'hooks/storeHooks';
import { counterSelectors } from 'engine/store/modules/counter/selectors';
import { decrement, increment } from 'engine/store/modules/counter/slice';

export const useCounter = (limit: number) => {
  const dispatch = useAppDispatch();
  const counter: number = useAppSelector(counterSelectors.counter);

  /** Increments counter state by 1. */
  const decrementHandler = () => dispatch(decrement());

  /** Decrements counter state by 1. */
  const incrementHandler = () => dispatch(increment());

  if(counter >= limit) {
    alert(`You have reached ${limit}`);
  }

  return {
    counter: counter >= 10 ? 10: counter,
    decrementHandler,
    incrementHandler,
  }
}