import { combineReducers } from '@reduxjs/toolkit';
import counter from 'engine/store/modules/counter/slice';


export const rootReducer = combineReducers({
  counter,
});

