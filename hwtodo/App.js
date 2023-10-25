import React from 'react';
import {NavigationContainer} from '@react-navigation/native' ;
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import ToDoScreen from "./screens/ToDoScreen";

import CompletedTasksScreen from "./screens/CompletedTasksScreen";

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={'ToDoScreen'} component={ToDoScreen} options={{headerShown: false}}/>
                <Stack.Screen name={'CompletedTasks'} component={CompletedTasksScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;