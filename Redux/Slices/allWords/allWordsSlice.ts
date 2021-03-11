import AsyncStorage from '@react-native-community/async-storage';
import {createSlice} from '@reduxjs/toolkit';
import {Alert} from 'react-native';

interface items {
  id: number;
  parola: string;
}

var array: items[] = [];

const allWordsSlice = createSlice({
  name: 'allWords',
  initialState: {
    arrayAllWords: [],
    allWords: {},
  },
  reducers: {
    setAllWords: (state: any, action) => {
      array.push(action.payload);
      try {
        AsyncStorage.setItem('AllWords', JSON.stringify(array));
      } catch (error) {
        // Alert.alert(error);
      }
    },
    getAllWords: (state) => {
      let result: any = AsyncStorage.getItem('AllWords');
      console.log(result)
      try {
        state.arrayAllWords = JSON.parse(result);
        console.log('ciao');
      } catch (error) {
        // Alert.alert(error);
      }
    },
  },
});

export const {setAllWords, getAllWords} = allWordsSlice.actions;
export const allWordsReducer = allWordsSlice.reducer;
