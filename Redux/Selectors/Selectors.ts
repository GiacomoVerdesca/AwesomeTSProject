import {RootState} from '../Store/ConfigureStore';

export const arrayListSelector = (state: RootState) => state.arrayList.arrayList;
export const keysSelector = (state: RootState) => state.keys.keys;
export const stateKeysSelector = (state: RootState) => state.keys.stateKeys;
export const pressedSelector = (state: RootState) => state.pressed.pressed;
export const selectAllSelector = (state: RootState) => state.pressed.selectAll;
