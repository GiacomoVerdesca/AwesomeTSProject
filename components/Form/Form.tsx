import AsyncStorage from '@react-native-community/async-storage';
import React, { useEffect, useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
// import { setAllWords } from '../../Redux/Slices/allWords/allWordsSlice';
import { Style } from './Style';


export const Form = (props: any) => {


  const [parole, setParole] = useState('');

  useEffect(() => {
    props.getAllKeys();
  }, [parole])


  const handleSubmit = async () => {
    let key = Date.now().toString();
    await props.setItemStorage(key, parole);
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
