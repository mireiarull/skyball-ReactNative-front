/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import TabNavigator from "./TabNavigator";
import { screen, fireEvent } from "@testing-library/react-native";
import { renderWithProviders } from "../test-utils/renderWithProviders";
import {
  mockInitialGamesState,
  mockInitialUiState,
  mockInitialUserState,
} from "../mocks/uiMocks";
import RoutesEnum from "./routes";

jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
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

    describe("When it's rendered with a logged user", () => {
      test("Then it should show a navigation bar with the text 'Crear'", () => {
        const tabNavigationCreate = "Crear";

        renderWithProviders(<TabNavigator />, {
          preloadedState: {
            ui: {
              ...mockInitialUiState,
              pagination: { currentPage: 0, totalPages: 2 },
            },
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

  describe("When it's rendered with a logged in user and it clicks the log out button", () => {
    test("Then the useNavigation should be called with the Login page reference", async () => {
      const logoutButtonText = "Salir";

      renderWithProviders(<TabNavigator />, {
        preloadedState: {
          ui: {
            ...mockInitialUiState,
            pagination: { currentPage: 0, totalPages: 2 },
          },
          user: { ...mockInitialUserState, isLogged: true },
          games: mockInitialGamesState,
        },
      });

      const logoutButton = await screen.queryByText(logoutButtonText);
      fireEvent(logoutButton, "press");

      expect(mockedNavigate).toHaveBeenCalledWith(RoutesEnum.welcome);
    });
  });
});
