/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import LoginForm from "./LoginForm";

const mockLoginUser = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => () => ({
  loginUser: mockLoginUser,
}));

describe("Given a LoginForm component", () => {
  describe("When it's rendererd", () => {
    test("Then it should show a title with text 'Identifícate'", async () => {
      const expectedText = "Identifícate";

      render(
        <Provider store={store}>
          <LoginForm />
        </Provider>
      );

      const title = await screen.getByText(expectedText);

      expect(title).toBeDefined();
    });
  });

  describe("And the user fills in the form and clicks on the submit button", () => {
    test("Then the written text should show on the input and it should call registerUser with the information", async () => {
      const emailId = "email";
      const passwordId = "password";
      const submitButtonText = "Iniciar sesión";

      render(
        <Provider store={store}>
          <LoginForm />
        </Provider>
      );

      const emailField = await screen.getByTestId(emailId);
      const passwordField = await screen.getByTestId(passwordId);
      const submitButton = await screen.getByText(submitButtonText);
      fireEvent.changeText(emailField, "mireia@gmail.com");
      fireEvent.changeText(passwordField, "security");
      fireEvent.press(submitButton);

      expect(emailField.props.value).toBe("mireia@gmail.com");
      expect(passwordField.props.value).toBe("security");
      expect(mockLoginUser).toHaveBeenCalledWith({
        email: "mireia@gmail.com",
        password: "security",
      });
    });
  });
});
