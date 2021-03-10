import React, {useState} from 'react';
import {ScrollView, View, Text} from 'react-native';
import {Form} from './components/Form/Form';
import {List} from './components/List/List';
import {Title} from './components/Title/Title';

const App = () => {
  const [allParole, setAllParole] = useState<allParole[]>([]);
  const [counter, setCounter] = useState<string>('0');

  interface allParole {
    parola: string,
     id: string
  }

  const handleSubmit = (parola:string) => {
    setAllParole((allParole) => {
      return [...allParole, {parola: parola, id: counter.toString()}];
    });
  };

  const delet = (id:string) => {
    setAllParole((preAllParole) => {
      return preAllParole.filter((items) => items.id !== id);
    });
  };

  console.log(allParole);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Title />
      <Form handleSubmit={handleSubmit} counter={setCounter} />
      <List allParole={allParole} delet={delet} />
    </View>
  );
};

export default App;
