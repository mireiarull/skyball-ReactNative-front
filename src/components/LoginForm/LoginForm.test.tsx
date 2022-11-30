/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { screen, fireEvent } from "@testing-library/react-native";

import LoginForm from "./LoginForm";
import { renderWithProviders } from "../../test-utils/renderWithProviders";
import RoutesEnum from "../../navigation/routes";

const mockLoginUser = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => () => ({
  loginUser: mockLoginUser,
}));

const mockedNavigate = jest.fn();

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe("Given a LoginForm component", () => {
  describe("When it's rendererd", () => {
    test("Then it should show a title with text 'Identifícate'", async () => {
      const expectedText = "Identifícate";

      renderWithProviders(<LoginForm />);

      const title = await screen.getByText(expectedText);

      expect(title).toBeDefined();
    });
  });

  describe("And the user fills in the form and clicks on the submit button", () => {
    test("Then the written text should show on the input and it should call registerUser with the information", async () => {
      const emailId = "email";
      const passwordId = "password";
      const submitButtonText = "Iniciar sesión";

      renderWithProviders(<LoginForm />);

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

  describe("And the user clicks on the 'Ir al registro' button", () => {
    test("Then the useNavigation should be called with the register page reference", async () => {
      const registerButtonText = "Ir al registro";

      renderWithProviders(<LoginForm />);

      const registerButton = await screen.getByText(registerButtonText);
      fireEvent(registerButton, "press");

      expect(mockedNavigate).toHaveBeenCalledWith(RoutesEnum.register);
    });
  });
});
