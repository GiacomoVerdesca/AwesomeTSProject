import React, { useEffect, useState } from 'react';
import { Alert, Button, View } from 'react-native';
import Form from '../Form';
import List from '../List';
import Title from '../Title';
import { Style } from './Style';


export const Home = () => {






  return (
    <View style={Style.container}>
      <Title />
      <Form />
      <List />
    </View>
  );
};

