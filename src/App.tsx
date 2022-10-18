import React, {useEffect} from 'react';
import { useAppDispatch } from 'hooks/storeHooks';
import {  setStep } from 'engine/store/modules/counter/slice';

import { Counter } from "components/Counter";

import 'App.scss';

export const App = () => {
  const dispatch = useAppDispatch();

  const selectStepHandler = (e: any) => {
    dispatch(setStep(e.target.value))
  }

  useEffect(() => {
    console.log(`component was mount at ${new Date()}`);
  })

  return (
      <>
       <Counter />
        <div>
          <label htmlFor="select-step">Select step</label>
          <select name="select-step" id="select-step" onChange={selectStepHandler}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
      </>
  );
};