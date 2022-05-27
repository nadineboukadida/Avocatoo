import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LandingPage from "./Pages/LandingPage/LandingPage";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import ChatPage from "./Pages/MessagingPage/ChatPage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const AuthStack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AuthStack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <AuthStack.Screen name="chat" component={ChatPage} />
          <AuthStack.Screen name="welcome" component={LandingPage} />
          <AuthStack.Screen name="login" component={LoginPage} />
          <AuthStack.Screen name="home" component={HomePage} />
        </AuthStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}