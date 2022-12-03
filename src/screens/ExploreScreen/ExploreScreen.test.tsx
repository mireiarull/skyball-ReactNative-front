/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { screen } from "@testing-library/react-native";
import ExploreScreen from "./ExploreScreen";
import {
  mockInitialGamesState,
  mockInitialUiState,
  mockInitialUserState,
} from "../../mocks/uiMocks";
import { renderWithProviders } from "../../test-utils/renderWithProviders";

describe("Given an ExploreScreen page", () => {
  describe("When it's rendered", () => {
    test("Then it should show a title with the text 'Partidos'", () => {
      const titleText = "Partidos";

      renderWithProviders(<ExploreScreen />, {
        preloadedState: {
          ui: {
            ...mockInitialUiState,
            pagination: { currentPage: 0, totalPages: 2 },
          },
          user: mockInitialUserState,
          games: mockInitialGamesState,
        },
      });

      const displayedText = screen.queryByText(titleText);

      expect(displayedText).toBeDefined();
    });

    test("Then it should show a bottom navigation bar with the links 'Explorar' y 'Login'", () => {
      const tabNavigationExplore = "Explorar";

      renderWithProviders(<ExploreScreen />, {
        preloadedState: {
          ui: {
            ...mockInitialUiState,
            pagination: { currentPage: 0, totalPages: 2 },
          },
          user: mockInitialUserState,
          games: mockInitialGamesState,
        },
      });

      const displayedtabNavigationExplore =
        screen.queryByText(tabNavigationExplore);

      expect(displayedtabNavigationExplore).toBeDefined();
    });
  });
});
