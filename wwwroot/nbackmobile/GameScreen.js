import React, { Component } from 'react';
import {
    Platform,
    Button,
    StyleSheet,
    Text,
    View
} from 'react-native';
import BoardContainer from './components/BoardContainer';
import HUDContainer from './components/HUDContainer';

export default class GameScreen extends Component {
    static navigationOptions = {
        title: 'N-Back',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
                <View style={{flexDirection: 'row', justifyContent: 'space-around', paddingTop: 5 }}>
                    <HUDContainer />
                    <Button
                        onPress={() => navigate('Options')}
                        title="options"
                        color="blue"
                    />
                </View>
                <BoardContainer />
            </View>
        );
    }
}

