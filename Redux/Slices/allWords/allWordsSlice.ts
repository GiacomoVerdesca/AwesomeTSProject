import AsyncStorage from '@react-native-community/async-storage';
import {createSlice} from '@reduxjs/toolkit';

interface items {
  id: number;
  parola: string;
}

var array: any = [];

const aspetta = async (state: any) => {
   await getter(state);
};

const getter = async (state: any) => {
  try {
    const value: any = await AsyncStorage.getItem('AllWords');
    if (value !== null) {
      console.log('sto nel getter per prendere lo storage', value);
      state.allWords = value.data;
      return state;
    }
  } catch (error) {
    console.warn(error);
  }
};

const setter = async (action: any) => {
  try {
    array.push(action.payload);
    console.log(array);
    const response = await AsyncStorage.setItem(
      'AllWords',
      JSON.stringify(array),
    );
    return response;
  } catch (error) {
    console.warn(error);
  }
};

const allWordsSlice = createSlice({
  name: 'allWords',
  initialState: {
    allWords: [],
  },
  reducers: {
    setAllWords: (state: any, action) => {
      setter(action);
    },
    getAllWords: (state: any) => {
      aspetta(state);
    },

    
  },
});

export const {setAllWords, getAllWords} = allWordsSlice.actions;
export const allWordsReducer = allWordsSlice.reducer;
