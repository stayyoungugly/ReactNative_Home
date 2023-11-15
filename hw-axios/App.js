import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from 'react';
import Navigation from "./navigation/Navigation";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Navigation/>
    );
};