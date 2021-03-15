import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList, View, Text, Button } from 'react-native';
import { Style } from './Style';
import AsyncStorage from '@react-native-community/async-storage';
import { arrayListSelector, keysSelector } from '../../Redux/Selectors/Selectors';
import { setArrayList } from '../../Redux/Slices/arrayList';
<<<<<<< HEAD
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSquare } from '@fortawesome/free-regular-svg-icons';

=======
import { setStateKeys } from '../../Redux/Slices/keys';
>>>>>>> b00f4404cbe5a84a79a77e6aa02417526d713577

export const List = () => {

  const dispatch = useDispatch();

  const keys = useSelector(keysSelector);
  const arrayList = useSelector(arrayListSelector);

  useEffect(() => {
    dispatch(setArrayList(keys));
  }, [keys])

  const removeItem = async (key: string) => {
    dispatch(setStateKeys('Item eliminato'));
    await AsyncStorage.removeItem(key);
    dispatch(setStateKeys(''));
  }
  const removeAll = async () => {
    dispatch(setStateKeys('Items eliminati'));
    await AsyncStorage.clear();
    dispatch(setStateKeys(''));
  }


  return (
    <View style={Style.container}>
      <Button onPress={() => removeAll()} title='remove' />
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
