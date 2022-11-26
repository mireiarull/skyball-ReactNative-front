/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";

import { Provider } from "react-redux";
import { store } from "../../redux/store";
import LoginScreen from "./LoginScreen";
import { NavigationContainer } from "@react-navigation/native";

const mockLoginUser = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => () => ({
  loginUser: mockLoginUser,
}));

const mockedGoBack = jest.fn();

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      goBack: mockedGoBack,
    }),
  };
});

describe("Given a LoginScreen page", () => {
  describe("When it's rendered", () => {
    test("Then it should show a background image", async () => {
      const imageId = "backgroundImage";

      render(
        <Provider store={store}>
          <NavigationContainer>
            <LoginScreen />
          </NavigationContainer>
        </Provider>
      );

      const displayedImage = screen.queryByTestId(imageId);

      expect(displayedImage).toBeDefined();
    });
  });

  describe("When the user clicks the back arrow button", () => {
    test("Then the useNavigation should be called with the goBack method", async () => {
      const backArrowId = "backArrow";

      render(
        <Provider store={store}>
          <NavigationContainer>
            <LoginScreen />
          </NavigationContainer>
        </Provider>
      );

      const goBackButton = await screen.getByTestId(backArrowId);
      fireEvent(goBackButton, "press");

      expect(mockedGoBack).toHaveBeenCalled();
    });
  });
});
