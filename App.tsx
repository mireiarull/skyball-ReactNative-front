import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import StackNavigatorExplorer from "./src/navigation/StackNavigator";

const App = () => {
  return (
    <Provider store={store}>
      <StackNavigatorExplorer />
    </Provider>
  );
};

export default App;
