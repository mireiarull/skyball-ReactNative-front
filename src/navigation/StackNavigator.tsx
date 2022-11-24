/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterScreen from "../screens/RegisterScreen/RegisterScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import Routes from "./routes";

const StackNavigatorExplorer = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.register} component={RegisterScreen} />
      <Stack.Screen name={Routes.login} component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigatorExplorer;
