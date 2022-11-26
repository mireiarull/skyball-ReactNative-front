import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import StackNavigatorExplorer from "./src/navigation/StackNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import useGames from "./src/hooks/useGames/useGames";

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <StackNavigatorExplorer />
    </Provider>
  );
};

export default App;
