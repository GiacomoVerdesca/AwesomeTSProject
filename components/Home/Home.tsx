import React from 'react';
import { View } from 'react-native';
import { Form } from '../../components/Form/Form';
import { List } from '../../components/List/List';
import { Title } from '../../components/Title/Title';
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

