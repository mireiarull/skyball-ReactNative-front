import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import LoginScreen from "./src/screens/LoginScreen/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import RegisterScreen from "./src/screens/RegisterScreen/RegisterScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen/WelcomeScreen";
import Loading from "./src/components/Loading/Loading";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <View>
          {/* <LoginScreen /> */}
          {/* <WelcomeScreen /> */}
          <Loading />
          {/* <RegisterScreen /> */}
          <StatusBar style="auto" />
        </View>
      </NavigationContainer>
    </Provider>
  );
}
