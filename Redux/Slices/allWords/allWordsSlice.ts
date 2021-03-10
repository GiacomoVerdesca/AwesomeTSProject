import {createSlice} from '@reduxjs/toolkit';

interface items {
  id: number;
  parola: string;
}

const allWordsSlice = createSlice({
  name: 'allWords',
  initialState: {
    allWords: [],
  },
  reducers: {
    setAllWords: (state: any, action) => {
      state.allWords.push(action.payload);
    },
    removeItemAllWords: (state, action) => {
      let result = state.allWords.filter(
        (items: items) => items.id !== action.payload,
      );
      state.allWords = result;
    },
  },
});

export const {setAllWords, removeItemAllWords} = allWordsSlice.actions;
export const allWordsReducer = allWordsSlice.reducer;
