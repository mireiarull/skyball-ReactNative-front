/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { render, screen } from "@testing-library/react-native";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import WelcomeScreen from "./WelcomeScreen";

const mockLoginUser = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => () => ({
  loginUser: mockLoginUser,
}));

describe("Given a WelcomeScreen page", () => {
  describe("When it's rendered", () => {
    test("Then it should show a background image and three buttons", async () => {
      const imageId = "backgroundImage";
      const loginButtontext = "Iniciar sesión";
      const registerButtonText = "Registrarme";
      const guestButtonText = "Continuar como invitado";

      render(
        <Provider store={store}>
          <WelcomeScreen />
        </Provider>
      );

      const displayedImage = screen.queryByTestId(imageId);
      const loginButton = await screen.getByText(loginButtontext);
      const registerButton = await screen.getByText(registerButtonText);
      const guestButton = await screen.getByText(guestButtonText);

      expect(displayedImage).toBeDefined();
      expect(loginButton).toBeDefined();
      expect(registerButton).toBeDefined();
      expect(guestButton).toBeDefined();
    });
  });
});
