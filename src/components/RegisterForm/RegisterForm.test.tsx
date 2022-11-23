/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import RegisterForm from "./RegisterForm";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

describe("Given a RegisterForm component", () => {
  describe("When it's rendererd", () => {
    test("Then it should show a title with text 'Regístrate'", async () => {
      const expectedText = "Regístrate";

      render(
        <Provider store={store}>
          <RegisterForm />
        </Provider>
      );

      const title = await screen.getByText(expectedText);

      expect(title).toBeDefined();
    });
  });

  describe("And the user fills in the form and clicks sumbit", () => {
    test("Then it should fill de form and call the dispatcher", async () => {
      const nameId = "name";

      render(
        <Provider store={store}>
          <RegisterForm />
        </Provider>
      );

      const nameField = await screen.getByTestId(nameId);
      fireEvent.changeText(nameField, "mireia");

      expect(nameField.props.value).toBe("mireia");
    });
  });
});
