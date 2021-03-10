import { createSlice } from '@reduxjs/toolkit';

const allWordsSlice = createSlice({
  name: 'allWords',
  initialState: {
allWords:[]
  },
  reducers: {
     setAllWords: (state, action)=>{
         state.allWords=action.payload  ;
      }
  },
});

export const {  setAllWords } = allWordsSlice.actions;
export const allWordsReducer = allWordsSlice.reducer;