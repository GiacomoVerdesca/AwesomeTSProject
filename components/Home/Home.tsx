import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { pressedSelector, selectAllSelector } from '../../Redux/Selectors/Selectors';
import { setPressed, setSelectAll } from '../../Redux/Slices/pressed';
import Form from '../Form';
import List from '../List';
import Title from '../Title';
import { Style } from './Style';


export const Home = () => {

  const dispatch = useDispatch();

  const pressed = useSelector(pressedSelector);
  const selectAll = useSelector(selectAllSelector);

  return (
    <TouchableWithoutFeedback onPress={() => {
      if (pressed) {
        dispatch(setPressed(false));
      };
      if (selectAll.length !== 0){
        dispatch(setSelectAll([]));
    }}}>
      <View style={Style.container}>
        <Title />
        <Form />
        <List />
      </View>
    </TouchableWithoutFeedback>
  );
};

