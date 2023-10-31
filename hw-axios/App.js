import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from 'react';
import { TodoApiScreen } from "./screens/TodoApiScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={'TodoApiScreen'} component={TodoApiScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}