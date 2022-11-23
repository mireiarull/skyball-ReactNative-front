import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import RegisterScreen from "./src/screens/RegisterScreen";

export default function App() {
  return (
    <Provider store={store}>
      <View>
        <RegisterScreen />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}
