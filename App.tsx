import {NavigationContainer} from "@react-navigation/native";
import LandingPage from "./src/Pages/LandingPage/LandingPage";
import HomePage from "./src/Pages/HomePage/HomePage";
import LoginPage from "./src/Pages/LoginPage/LoginPage";
import ChatPage from "./src/Pages/MessagingPage/ChatPage";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {AuthProvider} from './src/context/AuthContext';
const AuthStack = createNativeStackNavigator();

export default function App() {
    return (
        <AuthProvider>
        <SafeAreaProvider>
            <NavigationContainer>
                <AuthStack.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <AuthStack.Screen name="chat" component={ChatPage}/>
                    <AuthStack.Screen name="welcome" component={LandingPage}/>
                    <AuthStack.Screen name="login" component={LoginPage}/>
                    <AuthStack.Screen name="home" component={HomePage}/>
                </AuthStack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
        </AuthProvider>
    );
}
