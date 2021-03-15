import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList, View, Text, Button } from 'react-native';
import { Style } from './Style';
import AsyncStorage from '@react-native-community/async-storage';
import { arrayListSelector, keysSelector } from '../../Redux/Selectors/Selectors';
import { setArrayList } from '../../Redux/Slices/arrayList';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSquare } from '@fortawesome/free-regular-svg-icons';


export const List = () => {

  const dispatch = useDispatch();

  const keys = useSelector(keysSelector);
  const arrayList = useSelector(arrayListSelector);

  useEffect(() => {
    dispatch(setArrayList(keys));
  }, [keys])

  const removeItem = async (key: string) => {
    await AsyncStorage.removeItem(key)
  }


  return (
    <View style={Style.container}>
      <Button onPress={() => AsyncStorage.clear()} title='remove' />
      <FlatList
        keyExtractor={(item) => item[0]}
        data={arrayList}
        renderItem={({ item }) => (
          <View style={Style.ViewText}>
            <Text style={Style.single}> <FontAwesomeIcon icon={ faSquare } /> {item[1]}</Text>
            <Text style={Style.button} onPress={() => removeItem(item[0])}>x</Text>
          </View>
        )}
      />
    </View>
  );
};
