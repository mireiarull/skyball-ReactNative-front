/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { screen } from "@testing-library/react-native";
import StackNavigatorExplorer from "./StackNavigator";
import { renderWithProviders } from "../test-utils/renderWithProviders";
import {
  mockInitialGamesState,
  mockInitialUiState,
  mockInitialUserState,
} from "../mocks/uiMocks";

jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
}));

describe("Given a StackNavigator componenet", () => {
  describe("When it's rendered", () => {
    test("Then it should show the welcome screen with a background image and three buttons", async () => {
      const imageId = "backgroundImage";
      const loginButtontext = "Iniciar sesión";
      const registerButtonText = "Registrarme";
      const guestButtonText = "Continuar como invitado";

      renderWithProviders(<StackNavigatorExplorer />);

      const displayedImage = screen.queryByTestId(imageId);
      const loginButton = await screen.getByText(loginButtontext);
      const registerButton = await screen.getByText(registerButtonText);
      const guestButton = await screen.getByText(guestButtonText);

      expect(displayedImage).toBeDefined();
      expect(loginButton).toBeDefined();
      expect(registerButton).toBeDefined();
      expect(guestButton).toBeDefined();
    });

    test("Then it should show the welcome screen with a background image and three buttons", async () => {
      const modalText = "test";

      renderWithProviders(<StackNavigatorExplorer />, {
        preloadedState: {
          ui: { ...mockInitialUiState, showModal: true, modalText: "Test" },
          user: mockInitialUserState,
          games: mockInitialGamesState,
        },
      });

      const displayedModalText = screen.queryByTestId(modalText);

      expect(displayedModalText).toBeDefined();
    });
  });
});
