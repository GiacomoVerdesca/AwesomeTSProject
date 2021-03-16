import {createSlice} from '@reduxjs/toolkit';

const pressedSlice = createSlice({
  name: 'pressed',
  initialState: {
    pressed: false,
    selectAll: [],
  },
  reducers: {
    setPressed: (state, action) => {
      state.pressed = action.payload;
    },
    setSelectItem: (state: any, action) => {
      let sentence: boolean = state.selectAll.includes(action.payload);
      if (sentence === false) {
        state.selectAll.push(action.payload);
      } else {
        const result: string[] = state.selectAll.filter(
          (item: string) => item != action.payload,
        );
        state.selectAll = result;
      }
    },
    setSelectAll: (state, action) => {
      state.selectAll = action.payload;
    },
  },
});

export const pressedReducer = pressedSlice.reducer;
export const {
  setPressed,
  setSelectItem,
  setSelectAll,
} = pressedSlice.actions;
