import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import { Style } from './Style';
import { arrayListSelector, keysSelector, pressedSelector, selectAllSelector } from '../../Redux/Selectors/Selectors';
import { setArrayList } from '../../Redux/Slices/arrayList';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheckSquare, faSquare } from '@fortawesome/free-regular-svg-icons';
import { setPressed, setSelectAll, setSelectItem } from '../../Redux/Slices/pressed';
import SelectAndDelete from './components';

export const List = () => {

  const dispatch = useDispatch();

  const keys = useSelector(keysSelector);
  const arrayList = useSelector(arrayListSelector);
  const pressed = useSelector(pressedSelector);
  const selectAll = useSelector(selectAllSelector);

  useEffect(() => {
    dispatch(setArrayList(keys));
    keys.length === 0 ? dispatch(setPressed(false)) : null;
  }, [keys])


  const icon = (key: never) => {
    let sentence: boolean = selectAll.includes(key);
    if (sentence) {
      return faCheckSquare
    } else {
      return faSquare
    }
  }

  return (
    <View style={Style.container}>
      <SelectAndDelete setSelectAll={setSelectAll} selectAll={selectAll} pressed={pressed} keys={keys} />
      <FlatList
        keyExtractor={(item) => item[0]}
        data={arrayList}
        renderItem={({ item }) => (
          <TouchableOpacity onLongPress={() => dispatch(setPressed(true))} delayLongPress={300}>
            <View style={Style.ViewText}>
              {pressed &&
                <TouchableOpacity onPress={() => dispatch(setSelectItem(item[0]))}>
                  <FontAwesomeIcon style={Style.icon} icon={icon(item[0])} />
                </TouchableOpacity>
              }
              <Text style={Style.single}>  {item[1]} </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
