/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterScreen from "../screens/RegisterScreen/RegisterScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import RoutesEnum from "./routes";
import WelcomeScreen from "../screens/WelcomeScreen/WelcomeScreen";

const StackNavigatorExplorer = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName={RoutesEnum.welcome}>
      <Stack.Screen name={RoutesEnum.welcome} component={WelcomeScreen} />
      <Stack.Screen name={RoutesEnum.register} component={RegisterScreen} />
      <Stack.Screen name={RoutesEnum.login} component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigatorExplorer;
