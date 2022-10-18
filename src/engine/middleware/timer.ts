import { increment, decrement } from 'engine/store/modules/counter/slice';
import { RootState } from 'engine/store';
import { Middleware, Dispatch, Action } from 'redux';


export const timer: Middleware<
    {},
    RootState
    > = ({ dispatch, getState }) => {

  setInterval(() => {
    const {counter: { value }} = getState();

    if(value >= 0) {
      dispatch(increment());
    } else {
      dispatch(decrement());
    }
  }, 1000);

  return (next: Dispatch) => (action: Action ) => {
    next(action);
  };
};