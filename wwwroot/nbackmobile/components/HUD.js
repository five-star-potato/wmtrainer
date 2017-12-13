import React, { Component } from 'react';
import { View, Button, Alert } from 'react-native';

const HUD = ({ gameStarted, showOptions, options, numTrialsLeft, tpScore, fpScore, fnScore, pct, onStartClick, onStopClick, onCloseOptions, onShowOptions, onSaveOptions }) => {
    let btnText = gameStarted ? "Stop Game" : "Start Game";
    let toggleGame = () => {
        if (gameStarted) {
            onStopClick();
        }
        else {
            onStartClick(options);
        }
    }    
    onPressLearnMore = () => {
        toggleGame();
    }
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}>
            <Button
                onPress={onPressLearnMore}
                title={btnText}
                color="#841584"
                accessibilityLabel="Start Game"
            />

        </View>
    );
}

export default HUD;
