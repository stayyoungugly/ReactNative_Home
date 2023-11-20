import React from 'react';
import {NavigationContainer} from '@react-navigation/native' ;
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import ToDoScreen from "./screens/todo/ToDoScreen";

import CompletedTasksScreen from "./screens/todo/CompletedTasksScreen";
import {Host} from "react-native-portalize";
import {GestureHandlerRootView} from "react-native-gesture-handler";

const Stack = createNativeStackNavigator();

function App() {
    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <Host>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name={'ToDoScreen'} component={ToDoScreen} options={{headerShown: false}}/>
                    </Stack.Navigator>
                </NavigationContainer>
            </Host>
        </GestureHandlerRootView>
    );
}

export default App;