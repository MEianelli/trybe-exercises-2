import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import List from './List';
import InputsList from './InputsList';

class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
          <InputsList />
          <List />
        </Provider>
    );
  }
}

export default App;