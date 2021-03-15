import {RootState} from '../Store/ConfigureStore';

export const allWordsSelector = (state: RootState) => state.allWords.allWords;
