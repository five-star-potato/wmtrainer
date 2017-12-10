import React, { Component } from 'react';
import { View } from 'react-native';

const Board = () => {
    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-around',
          }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <View style={{width: 80, height: 80, backgroundColor: 'powderblue'}} />
                <View style={{width: 80, height: 80, backgroundColor: 'skyblue'}} />
                <View style={{width: 80, height: 80, backgroundColor: 'steelblue'}} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
                <View style={{width: 80, height: 80, backgroundColor: 'pink'}} />
                <View style={{width: 80, height: 80, backgroundColor: 'orange'}} />
                <View style={{width: 80, height: 80, backgroundColor: 'red'}} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <View style={{width: 80, height: 80, backgroundColor: 'yellow'}} />
                <View style={{width: 80, height: 80, backgroundColor: 'green'}} />
                <View style={{width: 80, height: 80, backgroundColor: 'blue'}} />
            </View>
        </View>
    );
}

export default Board;
