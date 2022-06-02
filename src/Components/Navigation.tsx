import React, { useContext } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContext } from "../context/AuthContext";
import HomePage from "../Pages/HomePage/HomePage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import SplashScreen from "../Pages/Splash/SplashPage";
import LandingPage from "../Pages/LandingPage/LandingPage";
import Archive from "../Pages/Archive/ArchivePage";
import ArchivePage from "../Pages/Archive/ArchivePage";
import Profile from "../Pages/LawProfessional/Profile";
import EditProfile from "../Pages/LawProfessional/EditProfile";
import Messaging from "../Pages/Messaging/Messaging";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const { token, splashLoading } = useContext(AuthContext);

  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName={"Home"}>
        {splashLoading ? (
          <Stack.Screen
            name="Splash Screen"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
        ) : token ? (
          <>
            <Stack.Screen
              name="Home"
              component={HomePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="archive"
              component={ArchivePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="chat"
              component={Messaging}
              options={{ headerShown: false }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={LoginPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="welcome" component={LandingPage} />
            <Stack.Screen
              name="EditProfile"
              component={EditProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LpProfile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={RegisterPage}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
