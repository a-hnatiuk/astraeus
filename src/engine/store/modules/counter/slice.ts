import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  value: 0,
  step: 1,
};

export const counter = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value += +state.step;
    },
    decrement(state) {
      state.value -= +state.step;
    },
    setStep(state, action) {
      state.step = action.payload;
    }
  }
});

export const { increment, decrement, setStep } = counter.actions;
export default counter.reducer;