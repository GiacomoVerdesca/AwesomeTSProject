import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {allWordsReducer} from '../Slices/allWords/allWordsSlice';

const reducer = combineReducers({
  allWords: allWordsReducer,
});

export type RootState = ReturnType<typeof reducer>;

export const Store = configureStore({
  reducer: reducer,
});
