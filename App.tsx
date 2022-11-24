import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import LoginScreen from "./src/screens/LoginScreen/LoginScreen";

export default function App() {
  return (
    <Provider store={store}>
      <View>
        <LoginScreen />
        {/* <RegisterScreen /> */}
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}
