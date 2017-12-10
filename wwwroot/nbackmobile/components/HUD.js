import React, { Component } from 'react';
import { View, Button, Alert } from 'react-native';

const HUD = () => {
    onPressLearnMore = () => {
        Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
              {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
          );
    }
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}>
            <Button
                onPress={onPressLearnMore}
                title="Start Game"
                color="#841584"
                accessibilityLabel="Start Game"
            />

        </View>
    );
}

export default HUD;
