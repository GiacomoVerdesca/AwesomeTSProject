import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { getMultiple } from '../../core/AsyncStorage';

export const setArrayList: any = createAsyncThunk(
  'arrayList/setArrayList', (key: string[])=>{
 return getMultiple(key)
  }
);
const arrayListSlice = createSlice({
  name: 'arrayList',
  initialState: {
    arrayList: [],
  },
  reducers: {},
  extraReducers: {
    [setArrayList.fulfilled]: (state, action) => {
      state.arrayList = action.payload;
    },
  },
});

export const arrayListReducer = arrayListSlice.reducer;
