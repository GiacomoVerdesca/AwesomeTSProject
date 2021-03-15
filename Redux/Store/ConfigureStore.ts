import {configureStore, combineReducers} from '@reduxjs/toolkit';
import { arrayListReducer } from '../Slices/arrayList';
import { keysReducer } from '../Slices/keys';

const reducer = combineReducers({
  arrayList: arrayListReducer,
  keys: keysReducer
});

export type RootState = ReturnType<typeof reducer>;

export const Store = configureStore({
  reducer,
});
