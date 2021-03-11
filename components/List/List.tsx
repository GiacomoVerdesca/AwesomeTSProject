import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { allWordsSelector,arrayAllWordsSelector } from '../../Redux/Selectors/Selectors';
import { getAllWords } from '../../Redux/Slices/allWords/allWordsSlice'
import { FlatList, View, Text,Button } from 'react-native';
import { Style } from './Style';

export const List = () => {

  const dispatch = useDispatch();

  const allWords: any = useSelector(allWordsSelector);
  const arrayAllWords: any = useSelector(arrayAllWordsSelector);

  useEffect(()=>{
 
  },[])

  // const delet = (id: number) => {
  //   dispatch(removeItemAllWords(id));
  // };


   
    

  

  return (
    <View style={Style.container}>
      <Button onPress={()=> dispatch(getAllWords())} title='c'></Button>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={arrayAllWords}
        renderItem={({ item }) => (
          <View style={Style.ViewText}>
            <Text style={Style.single}> {item.parola}</Text>
            {/* <Text style={Style.button} onPress={() => delet(item.id)}>x</Text> */}
          </View>
        )}

      />
    </View>
  );
};
