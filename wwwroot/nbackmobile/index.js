import React, {Component} from 'react';
import { AppRegistry } from 'react-native';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import gameApp from './reducers';
import * as act from './actions';
import App from './App';

let store = createStore(gameApp, {}, applyMiddleware(thunk));

const TopLevel = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent('nbackmobile', () => TopLevel);
