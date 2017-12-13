import React, { Component } from 'react';
import { View } from 'react-native';

const Board = ({ coords, showResult, score, onCloseResult }) => {
    boardStyle = (x, y) => (
        { width: 80, height: 80, borderRadius: 5, backgroundColor: coords.x == x && coords.y == y ? 'pink' : 'steelblue' }
    );
    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-around',
          }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <View style={boardStyle(0,0)} />
                <View style={boardStyle(0,1)} />
                <View style={boardStyle(0,2)} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
                <View style={boardStyle(1,0)} />
                <View style={boardStyle(1,1)} />
                <View style={boardStyle(1,2)} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
                <View style={boardStyle(2,0)} />
                <View style={boardStyle(2,1)} />
                <View style={boardStyle(2,2)} />
            </View>
        </View>
    );
}

export default Board;
