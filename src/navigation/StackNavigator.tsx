import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterScreen from "../screens/RegisterScreen/RegisterScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import WelcomeScreen from "../screens/WelcomeScreen/WelcomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import RoutesEnum from "./routes";
import ExploreScreen from "../screens/ExploreScreen/ExploreScreen";

const StackNavigatorExplorer = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={RoutesEnum.welcome}>
        <Stack.Screen
          name={RoutesEnum.welcome}
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={RoutesEnum.register}
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={RoutesEnum.login}
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={RoutesEnum.explore}
          component={ExploreScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigatorExplorer;
