import React, { useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Form } from './components/Form/Form';
import { List } from './components/List/List';
import { Title } from './components/Title/Title';
import { Store } from './Redux/Store/ConfigureStore';
import { Provider } from 'react-redux';
import {useSelector,useDispatch} from 'react-redux';
import {allWordsReducer} from './Redux/Selectors/Selectors';
import {setAllWords} from './Redux/Slices/allWords/allWordsSlice'


const App = () => {
  
  const dispatch=useDispatch();
  const allWords: any = useSelector(allWordsReducer);
  
  const [counter, setCounter] = useState<string>('0');

  interface allParole {
    parola: string,
    id: string
  }

  const handleSubmit = (parola: string) => {
    dispatch(setAllWords((preAllWords:allParole[]) => {
      return [...preAllWords, { parola: parola, id: counter.toString() }];
    }));
  };

  const delet = (id: string) => {
    dispatch(setAllWords((preAllParole:allParole[]) => {
      return preAllParole.filter((items) => items.id !== id);
    }));
  };

  console.log(allWords);
  return (
    <Provider store={Store}>
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Title />
      <Form handleSubmit={handleSubmit} counter={setCounter} />
      <List allParole={allWords} delet={delet} />
    </View>
    </Provider>
  );
};

export default App;
