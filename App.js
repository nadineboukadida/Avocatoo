import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LandingPage from './Pages/LandingPage/LandingPage';
import HomePage from './Pages/HomePage/HomePage';
import LoginPage from './Pages/LoginPage/LoginPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const AuthStack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
     
      <AuthStack.Screen name="welcome" component={LandingPage}/>
        <AuthStack.Screen name="home" component={HomePage}/>
         <AuthStack.Screen name="login" component={LoginPage}/>
      </AuthStack.Navigator>
    </NavigationContainer>
   
  );
}

