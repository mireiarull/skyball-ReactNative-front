/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import RegisterForm from "./RegisterForm";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

const mockRegisterUser = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => () => ({
  registerUser: mockRegisterUser,
}));

describe("Given a RegisterForm component", () => {
  const checkboxIds = [
    "checkboxFemale",
    "checkboxMale",
    "checkboxNoGender",
    "checkboxLevel1",
    "checkboxLevel2",
    "checkboxLevel3",
    "checkboxLevel4",
  ];

  const nameId = "name";
  const emailId = "email";
  const passwordId = "password";

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

  describe("And the user fills in the form", () => {
    test("Then the written text should show on the input", async () => {
      render(
        <Provider store={store}>
          <RegisterForm />
        </Provider>
      );

      const nameField = await screen.getByTestId(nameId);
      const emailField = await screen.getByTestId(emailId);
      const passwordField = await screen.getByTestId(passwordId);
      fireEvent.changeText(nameField, "mireia");
      fireEvent.changeText(emailField, "mireia@gmail.com");
      fireEvent.changeText(passwordField, "security");

      expect(nameField.props.value).toBe("mireia");
      expect(emailField.props.value).toBe("mireia@gmail.com");
      expect(passwordField.props.value).toBe("security");
    });
  });

  describe("And the user clicks on the checkboxes", () => {
    test("Then it should set the form state", async () => {
      render(
        <Provider store={store}>
          <RegisterForm />
        </Provider>
      );

      checkboxIds.forEach((id) => {
        const checkbox = screen.getByTestId(id);
        fireEvent.press(checkbox);
        expect(checkbox).toHaveAccessibilityState({ selected: true });
      });
    });
  });

  describe("And the user clicks on the submit button", () => {
    test("Then it should call registerUser with the form information", async () => {
      const submitButtonText = "Continuar";

      render(
        <Provider store={store}>
          <RegisterForm />
        </Provider>
      );

      const nameField = await screen.getByTestId(nameId);
      const emailField = await screen.getByTestId(emailId);
      const passwordField = await screen.getByTestId(passwordId);
      fireEvent.changeText(nameField, "mireia");
      fireEvent.changeText(emailField, "mireia@gmail.com");
      fireEvent.changeText(passwordField, "security");

      checkboxIds.forEach((id) => {
        const checkbox = screen.getByTestId(id);
        fireEvent.press(checkbox);
      });

      const submitButton = await screen.getByText(submitButtonText);
      fireEvent.press(submitButton);

      expect(mockRegisterUser).toHaveBeenCalledWith({
        email: "mireia@gmail.com",
        gender: "X",
        level: 4,
        name: "mireia",
        password: "security",
      });
    });
  });
});
