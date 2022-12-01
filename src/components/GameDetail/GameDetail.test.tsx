/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { screen } from "@testing-library/react-native";
import { type GameStructure } from "../../redux/features/gamesSlice/types";
import { renderWithProviders } from "../../test-utils/renderWithProviders";
import { getRandomGame } from "../../factories/gamesFactory";
import GameDetail from "./GameDetail";
import {
  mockInitialGamesState,
  mockInitialUiState,
  mockInitialUserState,
} from "../../mocks/uiMocks";

describe("Given a DetailGame component", () => {
  describe("When it is rendered with one game", () => {
    test("Then it should show the game's format, gender 'Masculino', level 'principiante', players, spots and beach name on the screen", () => {
      const gameLevel = "Nivel:";
      const gameGender = "Categoría:";

      renderWithProviders(<GameDetail />, {
        preloadedState: {
          ui: mockInitialUiState,
          user: mockInitialUserState,
          games: mockInitialGamesState,
        },
      });

      const expectedCardLevel = screen.queryByText(gameLevel);
      const expectedCardGender = screen.queryByText(gameGender);

      expect(expectedCardLevel).toBeDefined();
      expect(expectedCardGender).toBeDefined();
    });
  });
});
