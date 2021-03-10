import { combineReducers, createStore } from "redux";
import { allWordsReducer } from "../Slices/allWords/allWordsSlice";

const reducer =combineReducers({
    allWordsReducer:allWordsReducer
})

export const Store = createStore(
    reducer,
);

