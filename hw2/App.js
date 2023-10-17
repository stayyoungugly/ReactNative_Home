import React from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native' ;
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import ToDoScreen from "./ToDoScreen";

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={'ToDoScreen'} component={ToDoScreen} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
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
        },
        appButtonText: {
            color: 'white',
            fontSize:
                16,
        },
        container: {
            flex: 1,
            justifyContent:
                'center',
            alignItems:
                'center'
        }
    }
)

export default App;