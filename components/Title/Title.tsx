import React from 'react';
import {View, Text} from 'react-native';
import { Styles } from './Style';


export const Title = ()=>{
    return (
        <View style= {Styles.container}> 
            <Text style={Styles.title}>Note</Text>
        </View>
    )
}