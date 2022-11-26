/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import RegisterScreen from "./RegisterScreen";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { NavigationContainer } from "@react-navigation/native";

const mockRegisterUser = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => () => ({
  registerUser: mockRegisterUser,
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

describe("Given a RegisterScreen page", () => {
  describe("When it's rendered", () => {
    test("Then it should show a text with ", async () => {
      const expectedText = "Regístrate";

      render(
        <Provider store={store}>
          <NavigationContainer>
            <RegisterScreen />
          </NavigationContainer>
        </Provider>
      );

      const title = await screen.getByText(expectedText);

      expect(title).toBeDefined();
    });
  });

  describe("When the user clicks the back arrow button", () => {
    test("Then the useNavigation should be called with the goBack method", async () => {
      const backArrowId = "backArrow";

      render(
        <Provider store={store}>
          <NavigationContainer>
            <RegisterScreen />
          </NavigationContainer>
        </Provider>
      );

      const goBackButton = await screen.getByTestId(backArrowId);
      fireEvent(goBackButton, "press");

      expect(mockedGoBack).toHaveBeenCalled();
    });
  });
});
