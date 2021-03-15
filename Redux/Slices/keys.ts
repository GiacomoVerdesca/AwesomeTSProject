import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { getAllKeys } from '../../core/AsyncStorage';

export const setKeys: any = createAsyncThunk('keys/setKeys',()=>{
  return getAllKeys();
});

const keysSlice = createSlice({
  name: 'keys',
  initialState: {
    stateKeys: '',
    keys: [],
  },
  reducers: {
    setStateKeys: (state,action)=>{
   state.stateKeys = action.payload;    
    }
  },
  extraReducers: {
    [setKeys.fulfilled]: (state, action) => {
      state.keys = action.payload;
    },
  },
});

export const keysReducer = keysSlice.reducer;
export const {setStateKeys} = keysSlice.actions;