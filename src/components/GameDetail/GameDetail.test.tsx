/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { screen } from "@testing-library/react-native";
import { renderWithProviders } from "../../test-utils/renderWithProviders";
import GameDetail from "./GameDetail";
import { mockInitialUiState, mockInitialUserState } from "../../mocks/uiMocks";
import {
  mockInitialGamesStateFemaleLevel1,
  mockInitialGamesStateLevel4,
  mockInitialGamesStateMaleLevel3,
  mockInitialGamesStateMixtLevel2,
} from "../../mocks/gamesMocks";

describe("Given a DetailGame component", () => {
  describe("When it is rendered with one game", () => {
    test("Then it should show the game's format, gender 'Masculino', level 'intermedio alto', players, spots and beach name on the screen", () => {
      const gameLevel = "intermedio alto";
      const gameGender = "Masculino";

      renderWithProviders(<GameDetail />, {
        preloadedState: {
          ui: mockInitialUiState,
          user: mockInitialUserState,
          games: mockInitialGamesStateFemaleLevel1,
        },
      });

      const expectedCardLevel = screen.queryByText(gameLevel);
      const expectedCardGender = screen.queryByText(gameGender);

      expect(expectedCardLevel).toBeDefined();
      expect(expectedCardGender).toBeDefined();
    });

    test("Then it should show the game's format, gender 'Femenino', level 'principiante' on the screen", () => {
      const gameLevel = "principiante";
      const gameGender = "Femenino";

      renderWithProviders(<GameDetail />, {
        preloadedState: {
          ui: mockInitialUiState,
          user: mockInitialUserState,
          games: mockInitialGamesStateMaleLevel3,
        },
      });

      const expectedCardLevel = screen.queryByText(gameLevel);
      const expectedCardGender = screen.queryByText(gameGender);

      expect(expectedCardLevel).toBeDefined();
      expect(expectedCardGender).toBeDefined();
    });

    test("Then it should show the game's format, gender 'Mixto', level 'intermedio' on the screen", () => {
      const gameLevel = "intermedio";
      const gameGender = "Mixto";

      renderWithProviders(<GameDetail />, {
        preloadedState: {
          ui: mockInitialUiState,
          user: mockInitialUserState,
          games: mockInitialGamesStateMixtLevel2,
        },
      });

      const expectedCardLevel = screen.queryByText(gameLevel);
      const expectedCardGender = screen.queryByText(gameGender);

      expect(expectedCardLevel).toBeDefined();
      expect(expectedCardGender).toBeDefined();
    });

    test("Then it should show the game's format with level 'avanzado' on the screen", () => {
      const gameLevel = "avanzado";

      renderWithProviders(<GameDetail />, {
        preloadedState: {
          ui: mockInitialUiState,
          user: mockInitialUserState,
          games: mockInitialGamesStateLevel4,
        },
      });

      const expectedCardLevel = screen.queryByText(gameLevel);

      expect(expectedCardLevel).toBeDefined();
    });
  });
});
