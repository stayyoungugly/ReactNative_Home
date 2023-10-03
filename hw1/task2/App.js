import React, {useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Pressable} from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <BoxViews/>
        </View>
    );
}

function BoxViews() {
    return (
        <View>
            <Box color='red'></Box>
            <Box color='green'></Box>
            <Box color='blue'></Box>
        </View>
    )
}

export const Box = (props) => (
    <View style={{
        width: 100, height: 100, backgroundColor:
        props.color
    }}/>
);

const styles = StyleSheet.create({
    input: {
        padding: 8,
        width:
            250,
        height:
            40,
        backgroundColor:
            '#f5f5f5'
    }
    ,
    buttonFirst: {
        width: 120,
        height:
            50,
        justifyContent:
            "center",
        alignItems:
            "center",
        backgroundColor:
            'black',
    }
    ,
    buttonSecond: {
        width: 120,
        height:
            50,
        justifyContent:
            "center",
        alignItems:
            "center",
        backgroundColor:
            'blue',
    }
    ,
    container: {
        flex: 1,
        justifyContent:
            'center',
        alignItems:
            'center'
    }
    ,
    appButtonText: {
        color: 'white',
        fontSize:
            16,
    }
    ,
    content: {
        alignItems: 'center',
    }
    ,
});
