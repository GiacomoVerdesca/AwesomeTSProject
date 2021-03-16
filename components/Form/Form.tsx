import React, { useEffect, useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Style } from './Style';
import { setKeys, setStateKeys } from '../../Redux/Slices/keys';
import { pressedSelector, selectAllSelector, stateKeysSelector } from '../../Redux/Selectors/Selectors';
import { setItemStorage } from '../../core/AsyncStorage';
import { setPressed, setSelectAll } from '../../Redux/Slices/pressed';

export const Form = () => {

  const dispatch = useDispatch();

  const stateKeys = useSelector(stateKeysSelector);
  const pressed = useSelector(pressedSelector);
  const selectAll = useSelector(selectAllSelector);

  const [parole, setParole] = useState('');

  useEffect(() => {
    dispatch(setKeys());
  }, [stateKeys])


  const handleSubmit = async () => {
    let key = Date.now().toString();
    await setItemStorage(key, parole);
    dispatch(setStateKeys('Item aggiunto'));
    dispatch(setStateKeys(''));
    setParole('');
  }

  return (
    <View >
      <TextInput
        onTouchStart={() => {
          if (pressed) {
            dispatch(setPressed(false));
          };
          if (selectAll.length !== 0) {
            dispatch(setSelectAll([]));
          }
        }}
        style={Style.InputText}
        value={parole}
        placeholder="Insert Text..."
        onChangeText={(value) => setParole(value)}
        pointerEvents="none"
      />
      <View style={Style.Viewbutton}>

        <Button title="Add" color="orange" disabled={!parole && pressed} onPress={() => handleSubmit()} />
      </View>
    </View>
  );
};
