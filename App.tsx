import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {AuthProvider} from './src/context/AuthContext';
import {StatusBar} from "react-native";
import React from "react";
import Navigation from "./src/Components/Navigation";
import { NativeBaseProvider, Box } from "native-base";

export default function App() {
    return (
        <AuthProvider>
            <NativeBaseProvider>
        <SafeAreaProvider>
            <StatusBar backgroundColor="#000000" />
            <Navigation />
        </SafeAreaProvider>
            </NativeBaseProvider>
        </AuthProvider>
    );
}
