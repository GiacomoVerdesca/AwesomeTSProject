import React, { useEffect, useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Style } from './Style';
import { setKeys } from '../../Redux/Slices/keys';
import { keysSelector } from '../../Redux/Selectors/Selectors';
import { setItemStorage } from '../../core/AsyncStorage';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export const Form = () => {
  const dispatch = useDispatch();

  const keys = useSelector(keysSelector);

  const [parole, setParole] = useState('');

  useEffect(() => {
    dispatch(setKeys());
  }, [parole])


  const handleSubmit = async () => {
    let key = Date.now().toString();
    await setItemStorage(key, parole);
    setParole('');
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
