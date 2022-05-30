import React, {useContext} from 'react';


import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthContext} from '../context/AuthContext';
import HomePage from "../Pages/HomePage/HomePage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import SplashScreen from "../Pages/Splash/SplashPage";
import ChatPage from "../Pages/MessagingPage/ChatPage";
import LandingPage from "../Pages/LandingPage/LandingPage";
import Archive from '../Pages/Archive/ArchivePage';
import ArchivePage from '../Pages/Archive/ArchivePage';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    const {token, splashLoading} = useContext(AuthContext);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {splashLoading ? (
                    <Stack.Screen
                        name="Splash Screen"
                        component={SplashScreen}
                        options={{headerShown: false}}
                    />
                ) : token ? (
                    <>
                        <Stack.Screen name="Home" component={HomePage} options={{headerShown: false}}/>
                    <Stack.Screen name="archive" component={ArchivePage} options={{headerShown: false}}/>
                        <Stack.Screen name="chat" component={ChatPage} options={{headerShown: false}}/></>

                ) : (
                    <>
                        <Stack.Screen name="welcome" component={LandingPage}/>
                        <Stack.Screen
                            name="Login"
                            component={LoginPage}
                            options={{headerShown: false}}
                        />
                        <Stack.Screen
                            name="Register"
                            component={RegisterPage}
                            options={{headerShown: false}}
                        />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;