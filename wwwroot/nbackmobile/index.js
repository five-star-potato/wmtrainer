import React, {Component} from 'react';
import { AppRegistry } from 'react-native';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import App from './App';

const store = createStore((state = {}, action) => state);
//const MyApp = connect()(App)

const TopLevel = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent('nbackmobile', () => TopLevel);
