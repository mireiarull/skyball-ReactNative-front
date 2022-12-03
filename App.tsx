import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigatorExplorer from "./src/navigation/StackNavigator";

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigatorExplorer />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
