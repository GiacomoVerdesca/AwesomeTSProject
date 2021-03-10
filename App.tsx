import React from 'react';
import { Store } from './Redux/Store/ConfigureStore';
import { Provider } from 'react-redux';
import { Home } from './components/Home/Home';


const App = () => {


  return (
    <Provider store={Store}>
      <Home />
    </Provider>
  );
};

export default App;
