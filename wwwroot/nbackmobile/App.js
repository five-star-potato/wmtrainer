import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import BoardContainer from './components/BoardContainer';
import HUDContainer from './components/HUDContainer';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
        <HUDContainer />
        <BoardContainer />
      </View>
    );
  }
}

