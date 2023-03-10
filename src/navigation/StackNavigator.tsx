import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterScreen from "../screens/RegisterScreen/RegisterScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import WelcomeScreen from "../screens/WelcomeScreen/WelcomeScreen";
import RoutesEnum from "./routes";
import { useAppSelector } from "../redux/hooks";
import CustomModal from "../components/Modal/CustomModal";
import Loading from "../components/Loading/Loading";
import TabNavigator from "./TabNavigator";

const StackNavigatorExplorer = () => {
  const Stack = createNativeStackNavigator();
  const { isLoading, showModal } = useAppSelector((state) => state.ui);

  return (
    <>
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
          name={RoutesEnum.home}
          component={TabNavigator}
          options={{
            headerShown: false,
            gestureEnabled: false,
          }}
        />
      </Stack.Navigator>
      {showModal && <CustomModal />}
      {isLoading && <Loading />}
    </>
  );
};

export default StackNavigatorExplorer;
