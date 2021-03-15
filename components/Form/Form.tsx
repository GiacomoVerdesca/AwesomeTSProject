import React, { useEffect, useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Style } from './Style';
import { setKeys, setStateKeys } from '../../Redux/Slices/keys';
import { stateKeysSelector } from '../../Redux/Selectors/Selectors';
import { setItemStorage } from '../../core/AsyncStorage';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export const Form = () => {
  const dispatch = useDispatch();

  const [parole, setParole] = useState('');

  const stateKey = useSelector(stateKeysSelector);

  useEffect(() => {
    dispatch(setKeys());
  }, [stateKey])


  const handleSubmit = async () => {
    let key = Date.now().toString();
    await setItemStorage(key, parole);
    setParole('');
    dispatch(setStateKeys('Item aggiunto'));
    dispatch(setStateKeys(''));
  }

  return (
    <View >
      <TextInput
        style={Style.InputText}
        value={parole}
        placeholder="Insert Text..."
        onChangeText={(value) => setParole(value)}
      />
      <View style={Style.Viewbutton}>
      
        <Button title="Add" color="orange" disabled={!parole} onPress={() => handleSubmit()} />
      </View>
    </View>
  );
};
