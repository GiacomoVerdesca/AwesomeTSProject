import AsyncStorage from '@react-native-community/async-storage';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const setArrayList: any = createAsyncThunk(
  'arrayList/setArrayList',
  async (keys:string[]) => {
    let values: any;
    try {
      values = await AsyncStorage.multiGet(keys);
      return values;
    } catch (error) {
      console.log(error)
    }
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
