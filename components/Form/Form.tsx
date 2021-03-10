import React, { useState } from 'react';
import { Button, TextInput, View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setAllWords } from '../../Redux/Slices/allWords/allWordsSlice'
import { allWordsSelector } from '../../Redux/Selectors/Selectors';
import { Style } from './Style';


interface allParole {
  parola: string,
  id: number
}

export const Form = () => {

  const dispatch = useDispatch();

  const [parole, setParole] = useState('');
  const [counter, setCounter] = useState<number>(0);
   const allWords: any = useSelector(allWordsSelector);

  // const tutteparole = useSelector((state: any) => state.allWords.allWords);

  const handleSubmit = () => {

    setCounter(pre => pre + 1);

    // dispatch(setAllWords((preAllWords: allParole[]) => {
    //   console.log(preAllWords)
    //   return [...preAllWords, { parola: parola, id: counter.toString() }];
    // }));
    dispatch(setAllWords({id: counter, parola: parole}));

    setParole('');
  };

  console.warn(allWords)

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
