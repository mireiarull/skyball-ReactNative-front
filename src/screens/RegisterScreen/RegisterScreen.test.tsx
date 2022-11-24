/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { render, screen } from "@testing-library/react-native";
import RegisterScreen from "./RegisterScreen";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

const mockRegisterUser = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => () => ({
  registerUser: mockRegisterUser,
}));

describe("Given a RegisterScreen page", () => {
  describe("When it's rendered", () => {
    test("Then it should show a text with ", async () => {
      const expectedText = "Regístrate";

      render(
        <Provider store={store}>
          <RegisterScreen />
        </Provider>
      );

      const title = await screen.getByText(expectedText);

      expect(title).toBeDefined();
    });
  });
});
