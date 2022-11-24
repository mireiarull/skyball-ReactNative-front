/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { render, screen } from "@testing-library/react-native";

import { Provider } from "react-redux";
import { store } from "../../redux/store";
import LoginScreen from "./LoginScreen";

const mockLoginUser = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => () => ({
  loginUser: mockLoginUser,
}));

describe("Given a LoginScreen page", () => {
  describe("When it's rendered", () => {
    test("Then it should show a background image", async () => {
      const imageId = "backgroundImage";

      render(
        <Provider store={store}>
          <LoginScreen />
        </Provider>
      );

      const displayedImage = screen.queryByTestId(imageId);

      expect(displayedImage).toBeDefined();
    });
  });
});
