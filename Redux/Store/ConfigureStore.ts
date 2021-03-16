import {configureStore, combineReducers} from '@reduxjs/toolkit';
import { arrayListReducer } from '../Slices/arrayList';
import { keysReducer } from '../Slices/keys';
import { pressedReducer } from '../Slices/pressed';

const reducer = combineReducers({
  arrayList: arrayListReducer,
  keys: keysReducer,
  pressed: pressedReducer
});

export type RootState = ReturnType<typeof reducer>;

export const Store = configureStore({
  reducer,
});
