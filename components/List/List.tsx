import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
// import { allWordsSelector } from '../../Redux/Selectors/Selectors';
// import { getAllWords } from '../../Redux/Slices/allWords/allWordsSlice';
import { FlatList, View, Text, Button } from 'react-native';
import { Style } from './Style';
import AsyncStorage from '@react-native-community/async-storage';

export const List = (props: any) => {



  useEffect(() => {
    props.getMultiple();
  }, [props.keys])

  const removeItem = async (key: string) => {
    await AsyncStorage.removeItem(key)
  }


  return (
    <View style={Style.container}>
      <Button onPress={() => AsyncStorage.clear()} title='remove' />
      <FlatList
        keyExtractor={(item) => item[0]}
        data={props.arrayList}
        renderItem={({ item }) => (
          <View style={Style.ViewText}>
            <Text style={Style.single}> {item[1]}</Text>
            <Text style={Style.button} onPress={() => removeItem(item[0])}>x</Text>
          </View>
        )}

      />
    </View>
  );
};
