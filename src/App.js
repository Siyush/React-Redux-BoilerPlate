import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Items from './components/Items';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>React BoilerPlate</h1>
          <Items />
        </div>
      </Provider>
    );
  }
}

export default App;
