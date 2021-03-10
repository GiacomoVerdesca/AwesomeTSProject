import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { allWordsSelector } from '../../Redux/Selectors/Selectors';
import { removeItemAllWords } from '../../Redux/Slices/allWords/allWordsSlice'
import { FlatList, View, Text } from 'react-native';
import { Style } from './Style';

export const List = () => {

  const dispatch = useDispatch();

  const allWords: any = useSelector(allWordsSelector);


  const delet = (id: number) => {
    dispatch(removeItemAllWords(id));
  };


  return (
    <View style={Style.container}>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={allWords}
        renderItem={({ item }) => (
          <View style={Style.ViewText}>
            <Text style={Style.single}> {item.parola}</Text>
            <Text style={Style.button} onPress={() => delet(item.id)}>x</Text>
          </View>
        )}

      />
    </View>
  );
};
