import React from 'react';

import {FlatList, View, Text,ScrollView, Button} from 'react-native';
import {Style} from './Style';

export const List = (props:any) => {

    
  return (
   <View style={Style.container}>
      <FlatList

        data={props.allParole}
        renderItem={({item}) => (
          <View style={Style.ViewText}>
            <Text style={Style.single}> {item.parola}</Text>
            <Text  style={Style.button} onPress={()=>props.delet(item.id)}>x</Text>
             
            
          </View>
        )}
       
      />
    </View>
  );
};
