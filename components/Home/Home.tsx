import React, { useEffect, useState } from 'react';
import { Alert, Button, View } from 'react-native';
import Form from '../Form';
import List from '../List';
import Title from '../Title';
import { Style } from './Style';
import AsyncStorage from '@react-native-community/async-storage';


export const Home = () => {


  const [arrayList, setArrayList] = useState([]);
  const [keys, setKeys] = useState([]);

  const setItemStorage = async (key: any, value: any) => {
    try {
      await AsyncStorage.setItem(key, value)
    } catch (error) {
      console.log(error)
    }
  };

  const getAllKeys = async () => {
    let arrayKeys: any = []
    try {
      arrayKeys = await AsyncStorage.getAllKeys();
      setKeys(arrayKeys);
    } catch (error) {
      console.log(error)
    }
  }

  const getMultiple = async () => {
    let values: any;
    try {
      values = await AsyncStorage.multiGet(keys);
      setArrayList(values)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <View style={Style.container}>
      <Title />
      <Form getAllKeys={getAllKeys} setItemStorage={setItemStorage} keys={keys} />
      <List getMultiple={getMultiple} keys={keys} arrayList={arrayList} />
    </View>
  );
};

