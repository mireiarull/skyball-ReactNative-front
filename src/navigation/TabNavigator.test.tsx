/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import TabNavigator from "./TabNavigator";
import { screen } from "@testing-library/react-native";
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

describe("Given a TabNavigator component", () => {
  describe("When it's rendered for an un unlogged user", () => {
    test("Then it should show a navigation bar with the text 'Explorar' and 'Login'", () => {
      const tabNavigationExplore = "Explorar";
      const tabNavigationLogin = "Login";

      renderWithProviders(<TabNavigator />);

      const displayedtabNavigationExplore =
        screen.queryByText(tabNavigationExplore);
      const displayedtabNavigationLogin =
        screen.queryByText(tabNavigationLogin);

      expect(displayedtabNavigationExplore).toBeDefined();
      expect(displayedtabNavigationLogin).toBeDefined();
    });

    describe("When it's rendered for a logged user", () => {
      test("Then it should show a navigation bar with the text 'Crear'", () => {
        const tabNavigationCreate = "Crear";

        renderWithProviders(<TabNavigator />, {
          preloadedState: {
            ui: mockInitialUiState,
            user: { ...mockInitialUserState, isLogged: true },
            games: mockInitialGamesState,
          },
        });

        const displayedtabNavigationCreate =
          screen.queryByText(tabNavigationCreate);

        expect(displayedtabNavigationCreate).toBeDefined();
      });
    });
  });
});
