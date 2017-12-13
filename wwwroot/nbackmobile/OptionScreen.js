import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class OptionScreen extends Component {
    static navigationOptions = {
        title: 'Options',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
                <Text>Option Screen</Text>
            </View>
        );
    }
}

