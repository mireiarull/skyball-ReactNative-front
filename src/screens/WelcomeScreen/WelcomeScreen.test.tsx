/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import WelcomeScreen from "./WelcomeScreen";
import { NavigationContainer } from "@react-navigation/native";

const mockLoginUser = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => () => ({
  loginUser: mockLoginUser,
}));

// Jest.mock("react-native/Libraries/Animated/src/NativeAnimatedHelper");
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

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

    // Describe("And the user clicks the 'Registrarme' button", () => {
    //   test("Then it should redirect to the Welcome page and show a title 'Regístrate'", async () => {
    //     const registerButtonText = "Registrarme";
    //     const welcomePageText = "Regístrate";

    //     render(
    //       <Provider store={store}>
    //         <NavigationContainer>
    //           <WelcomeScreen />
    //         </NavigationContainer>
    //       </Provider>
    //     );

    //     const registerButton = await screen.getByText(registerButtonText);
    //     fireEvent(registerButton, "press");

    //     const expectedWelcomePageText = await screen.getByText(welcomePageText);

    //     expect(expectedWelcomePageText).toBeTruthy();
    //   });
    // });
  });
});
