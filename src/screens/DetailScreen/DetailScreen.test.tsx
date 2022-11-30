/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { NavigationContainer } from "@react-navigation/native";
import DetailScreen from "./DetailScreen";

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

describe("Given a DetailScreen page", () => {
  describe("When the user clicks the back arrow button", () => {
    test("Then the useNavigation should be called with the goBack method", async () => {
      const backArrowId = "backArrow";

      render(
        <Provider store={store}>
          <NavigationContainer>
            <DetailScreen />
          </NavigationContainer>
        </Provider>
      );

      const goBackButton = await screen.getByTestId(backArrowId);
      fireEvent(goBackButton, "press");

      expect(mockedGoBack).toHaveBeenCalled();
    });
  });
});
