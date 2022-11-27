/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import WelcomeScreen from "./WelcomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import RoutesEnum from "../../navigation/routes";

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

describe("Given a WelcomeScreen page", () => {
  describe("When it's rendered", () => {
    test("Then it should show a background image and three buttons", async () => {
      const imageId = "backgroundImage";
      const loginButtontext = "Iniciar sesión";
      const registerButtonText = "Registrarme";
      const guestButtonText = "Continuar como invitado";

      render(
        <Provider store={store}>
          <NavigationContainer>
            <WelcomeScreen />
          </NavigationContainer>
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

    describe("And the user clicks the 'Registrarme' button", () => {
      test("Then the useNavigation should be called with the register page reference", async () => {
        const registerButtonText = "Registrarme";

        render(
          <Provider store={store}>
            <NavigationContainer>
              <WelcomeScreen />
            </NavigationContainer>
          </Provider>
        );

        const registerButton = await screen.getByText(registerButtonText);
        fireEvent(registerButton, "press");

        expect(mockedNavigate).toHaveBeenCalledWith(RoutesEnum.register);
      });
    });

    describe("And the user clicks the 'Iniciar sesión' button", () => {
      test("Then the useNavigation should be called with the login page reference", async () => {
        const loginButtonText = "Iniciar sesión";

        render(
          <Provider store={store}>
            <NavigationContainer>
              <WelcomeScreen />
            </NavigationContainer>
          </Provider>
        );

        const loginButton = await screen.getByText(loginButtonText);
        fireEvent(loginButton, "press");

        expect(mockedNavigate).toHaveBeenCalledWith(RoutesEnum.login);
      });
    });

    describe("And the user clicks the 'Continuar como invitado' button", () => {
      test("Then the useNavigation should be called with the explore page reference", async () => {
        const continueButtonText = "Continuar como invitado";

        render(
          <Provider store={store}>
            <NavigationContainer>
              <WelcomeScreen />
            </NavigationContainer>
          </Provider>
        );

        const loginButton = await screen.getByText(continueButtonText);
        fireEvent(loginButton, "press");

        expect(mockedNavigate).toHaveBeenCalledWith(RoutesEnum.home);
      });
    });
  });
});
