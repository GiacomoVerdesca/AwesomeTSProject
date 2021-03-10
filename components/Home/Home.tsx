import React from 'react';
import { View } from 'react-native';
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

