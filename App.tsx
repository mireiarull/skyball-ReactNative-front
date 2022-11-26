import React, { useState } from "react";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import StackNavigatorExplorer from "./src/navigation/StackNavigatorExplorer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <StackNavigatorExplorer />
    </Provider>
  );
};

export default App;
