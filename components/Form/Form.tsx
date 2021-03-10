import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { setAllWords } from '../../Redux/Slices/allWords/allWordsSlice';
import { Style } from './Style';


export const Form = () => {

  const dispatch = useDispatch();

  const [parole, setParole] = useState('');
  const [counter, setCounter] = useState<number>(0);

  const handleSubmit = () => {
    setCounter(preCounter => preCounter + 1);
    dispatch(setAllWords({ id: counter, parola: parole }));
    setParole('');
  };


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
