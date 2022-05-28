import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {AuthProvider} from './src/context/AuthContext';
import {StatusBar} from "react-native";
import React from "react";
import Navigation from "./src/Components/Navigation";
const AuthStack = createNativeStackNavigator();

export default function App() {
    return (
        <AuthProvider>
        <SafeAreaProvider>
            <StatusBar backgroundColor="#06bcee" />
            <Navigation />
        </SafeAreaProvider>
        </AuthProvider>
    );
}
