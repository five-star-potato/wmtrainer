import React, { Component } from 'react';
import { View } from 'react-native';

const Board = () => {
    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </View>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{width: 50, height: 50, backgroundColor: 'pink'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'orange'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'red'}} />
            </View>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{width: 50, height: 50, backgroundColor: 'yellow'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'green'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'blue'}} />
            </View>

        </View>

    );
}

export default Board;
