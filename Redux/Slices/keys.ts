import AsyncStorage from '@react-native-community/async-storage';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const setKeys: any = createAsyncThunk('keys/setKeys', async () => {
  let arrayKeys: any = [];
  try {
    arrayKeys = await AsyncStorage.getAllKeys();
    return arrayKeys;
  } catch (error) {
    console.log(error);
  }
});

const keysSlice = createSlice({
  name: 'keys',
  initialState: {
    keys: [],
  },
  reducers: {},
  extraReducers: {
    [setKeys.fulfilled]: (state, action) => {
      state.keys = action.payload;
    },
  },
});

export const keysReducer = keysSlice.reducer;
