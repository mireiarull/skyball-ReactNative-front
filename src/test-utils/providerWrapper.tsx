import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";

interface ProviderWrapperProps {
  children: JSX.Element | JSX.Element[];
}

const ProviderWrapper = ({ children }: { children: JSX.Element }) => (
  <Provider store={store}>
    <NavigationContainer>{children}</NavigationContainer>
  </Provider>
);

export default ProviderWrapper;
